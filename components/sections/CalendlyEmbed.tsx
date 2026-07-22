"use client";

import { useEffect, useRef, useState } from "react";
import { getCalendlyEmbedUrl } from "@/lib/calendly";

const MAX_POLL_ATTEMPTS = 25;

// The real Calendly inline embed — kept separate from Booking.tsx so it
// can be swapped back in with one line once the client finishes setting
// up an Event Type + connected calendar in their Calendly account.
export function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let attempts = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    function check() {
      if (window.Calendly) {
        setReady(true);
        if (interval) clearInterval(interval);
        return true;
      }
      return false;
    }

    const timeout = setTimeout(() => {
      if (check()) return;
      interval = setInterval(() => {
        attempts += 1;
        if (check() || attempts >= MAX_POLL_ATTEMPTS) {
          clearInterval(interval);
        }
      }, 200);
    }, 0);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (ready && containerRef.current) {
      window.Calendly?.initInlineWidget({
        url: getCalendlyEmbedUrl(),
        parentElement: containerRef.current,
      });
    }
  }, [ready]);

  return (
    <div className="border-border bg-surface relative overflow-hidden rounded-2xl border">
      <div ref={containerRef} className="min-h-[700px] w-full" />
      {!ready && (
        <div className="text-foreground/50 absolute inset-0 flex items-center justify-center text-sm">
          A carregar marcações…
        </div>
      )}
    </div>
  );
}
