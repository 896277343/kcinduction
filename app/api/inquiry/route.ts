import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/site.config";

const INQUIRY_ENDPOINT = "https://inquiry.sf6sf6.com/updata_ppc.php";
const SITE_ORIGIN = siteConfig.site_domain.replace(/\/$/, "");

function firstValue(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value : "";
}

function sanitizePath(path: string, fallback: string) {
  if (!path || !path.startsWith("/")) {
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

  try {
    const response = await fetch(INQUIRY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
      cache: "no-store",
    });

    const responseBody = (await response.text()).trim();
    if (!response.ok || /restricted access|access denied|forbidden/i.test(responseBody)) {
      throw new Error(`Inquiry endpoint rejected request (HTTP ${response.status}): ${responseBody.slice(0, 120)}`);
    }

    const redirectUrl = new URL(successPath, SITE_ORIGIN);
    redirectUrl.searchParams.set("status", "success");
    if (productName) redirectUrl.searchParams.set("product", productName);
    if (productSlug) redirectUrl.searchParams.set("product_slug", productSlug);
    return NextResponse.redirect(redirectUrl, { status: 303 });
  } catch (error) {
    console.error("Inquiry submission failed:", error);
    const redirectUrl = new URL(failurePath, SITE_ORIGIN);
    redirectUrl.searchParams.set("status", "error");
    if (productName) redirectUrl.searchParams.set("product", productName);
    if (productSlug) redirectUrl.searchParams.set("product_slug", productSlug);
    return NextResponse.redirect(redirectUrl, { status: 303 });
  }
}
