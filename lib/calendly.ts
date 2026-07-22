import { siteContent } from "./content";

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
