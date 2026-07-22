import { siteContent } from "./content";

// Flip to true once the client has created a real Event Type with a
// connected calendar in their Calendly account — otherwise Calendly
// just shows "No openings at the moment" to every visitor. Read by
// both Booking.tsx (inline embed vs. preview) and FloatingBookButton
// (popup vs. scroll-to-preview) so they stay in sync.
export const CALENDLY_READY = false;

// Calendly's inline-embed color params match the site's dark palette
// (hex without '#'). See https://help.calendly.com/hc/en-us/articles/223147027
export function getCalendlyEmbedUrl() {
  const params = new URLSearchParams({
    background_color: "161616",
    text_color: "f5f1e8",
    primary_color: "c9a35c",
  });
  return `${siteContent.calendlyUrl}?${params.toString()}`;
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}
