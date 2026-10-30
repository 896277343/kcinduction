import { NextRequest, NextResponse } from "next/server";
import { isIP } from "node:net";
import { siteConfig } from "@/site.config";

const INQUIRY_ENDPOINT = "https://inquiry.sf6sf6.com/updata_ppc.php";

function firstValue(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value : "";
}

function sanitizePath(path: string, fallback: string) {
  if (!path || !path.startsWith("/") || path.startsWith("//") || path.includes("\\")) {
    return fallback;
  }

  return path;
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const successPath = sanitizePath(
    firstValue(formData.get("success_path")),
    "/inquiry/success"
  );
  const failurePath = sanitizePath(
    firstValue(formData.get("failure_path")),
    successPath
  );
  const productName = firstValue(formData.get("product_name"));
  const productSlug = firstValue(formData.get("product_slug"));

  formData.delete("success_path");
  formData.delete("failure_path");

  const payload = new URLSearchParams();

  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") payload.append(key, value);
  }

  // The receiving system historically expects a name. Keep the field optional
  // for visitors while giving that legacy field a clear placeholder.
  if (!payload.get("name")?.trim()) payload.set("name", "Not provided");

  // The inquiry system uses these values for its spam classification. Without
  // forwarding them, every visitor looks like the same Node.js proxy process.
  const headers: Record<string, string> = {
    "Content-Type": "application/x-www-form-urlencoded",
    "X-Requested-With": "XMLHttpRequest",
  };
  const userAgent = request.headers.get("user-agent");
  const language = request.headers.get("accept-language");
  const forwardedIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (userAgent) headers["User-Agent"] = userAgent.slice(0, 512);
  if (language) headers["Accept-Language"] = language.slice(0, 256);
  if (forwardedIp && isIP(forwardedIp) && forwardedIp !== "::1" && forwardedIp !== "127.0.0.1") {
    headers["X-Forwarded-For"] = forwardedIp;
  }

  let failureReason = "";
  try {
    const response = await fetch(INQUIRY_ENDPOINT, {
      method: "POST",
      headers,
      body: payload.toString(),
      cache: "no-store",
    });

    const responseBody = (await response.text()).trim();
    const resultCode = response.headers.get("x-ray-code");
    if (!response.ok || resultCode !== "Success") {
      if (/content field length/i.test(responseBody)) failureReason = "content_length";
      else if (/content can not contain links/i.test(responseBody)) failureReason = "content_link";
      else if (/username field length/i.test(responseBody)) failureReason = "name_length";
      throw new Error(`Inquiry endpoint rejected request (HTTP ${response.status}, result ${resultCode ?? "missing"}): ${responseBody.slice(0, 120)}`);
    }

    const redirectUrl = new URL(successPath, siteConfig.site_domain);
    redirectUrl.searchParams.set("status", "success");
    if (productName) redirectUrl.searchParams.set("product", productName);
    if (productSlug) redirectUrl.searchParams.set("product_slug", productSlug);
    return NextResponse.redirect(redirectUrl, { status: 303 });
  } catch (error) {
    console.error("Inquiry submission failed:", error);
    const redirectUrl = new URL(failurePath, siteConfig.site_domain);
    redirectUrl.searchParams.set("status", "error");
    if (failureReason) redirectUrl.searchParams.set("reason", failureReason);
    if (productName) redirectUrl.searchParams.set("product", productName);
    if (productSlug) redirectUrl.searchParams.set("product_slug", productSlug);
    return NextResponse.redirect(redirectUrl, { status: 303 });
  }
}
