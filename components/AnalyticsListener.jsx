"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsListener() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "page_view",
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
