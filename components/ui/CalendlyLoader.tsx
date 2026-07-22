"use client";

import { useEffect } from "react";

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

// next/script (strategy="afterInteractive") does not reliably execute
// this external script in this Next.js version's dev server — loading
// it via a plain DOM script tag instead.
export function CalendlyLoader() {
  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
