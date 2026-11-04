"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useI18n } from "./provider";

export default function LocalizedLink({ href, ...props }: ComponentProps<typeof NextLink>) {
  const { href: localizedHref } = useI18n();
  const localized = typeof href === "string" && href.startsWith("/") && !href.startsWith("//") ? localizedHref(href) : href;
  return <NextLink href={localized} {...props} />;
}
