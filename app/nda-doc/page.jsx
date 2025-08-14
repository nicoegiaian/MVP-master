"use client";
import { useEffect } from "react";

export default function NDADOC() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return <div></div>;
}
