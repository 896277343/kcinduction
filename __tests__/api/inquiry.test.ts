import { afterEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";
import { POST } from "@/app/api/inquiry/route";

afterEach(() => vi.restoreAllMocks());

function inquiryRequest() {
  return new NextRequest("http://localhost:3010/api/inquiry", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "user-agent": "Test Browser",
      "accept-language": "en-US,en;q=0.9",
      "x-forwarded-for": "203.0.113.10, 127.0.0.1",
    },
    body: new URLSearchParams({
      referer: "http://localhost:3010/contact",
      email: "test@example.com",
      content: "Test heating project details",
      success_path: "/inquiry/success",
    }),
  });
}

describe("inquiry submission", () => {
  it("uses the inquiry system's explicit success code and forwards visitor context", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response('"Thanks for your submit"', {
        status: 200,
        headers: { "X-RAY-Code": "Success" },
      }),
    );

    const response = await POST(inquiryRequest());

    expect(response.status).toBe(303);
    expect(response.headers.get("location")).toContain("http://localhost:3010/inquiry/success?status=success");
    const init = fetchMock.mock.calls[0][1] as RequestInit;
    expect(new Headers(init.headers).get("X-Requested-With")).toBe("XMLHttpRequest");
    expect(new Headers(init.headers).get("User-Agent")).toBe("Test Browser");
    expect(new Headers(init.headers).get("X-Forwarded-For")).toBe("203.0.113.10");
    expect(new URLSearchParams(init.body as string).get("name")).toBe("Not provided");
  });

  it("does not treat a plain HTTP 200 HTML page as confirmed success", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response('<script>alert("submit failed !")</script>', { status: 200 }),
    );

    const response = await POST(inquiryRequest());

    expect(response.headers.get("location")).toContain("http://localhost:3010/inquiry/success?status=error");
  });

  it("passes the content-length rejection back to the visitor", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response('{"code":0,"message":"The content field length must be 5-2000 characters."}', {
        status: 200,
        headers: { "X-RAY-Code": "Error" },
      }),
    );

    const response = await POST(inquiryRequest());

    expect(response.headers.get("location")).toContain("reason=content_length");
  });
});
