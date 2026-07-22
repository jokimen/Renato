import Image from "next/image";
import { siteContent } from "@/lib/content";

// lucide-react dropped brand/logo icons — small inline marks instead.
function FacebookIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-border border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Image
            src="/images/logo.png"
            alt={siteContent.businessName}
            width={600}
            height={226}
            className="mb-3 h-11 w-auto"
          />
          <p className="text-foreground/60 mt-1 text-sm">
            {siteContent.address}
          </p>
          <p className="text-foreground/60 text-sm">
            {siteContent.phoneDisplay}
          </p>
          <p className="text-foreground/60 text-sm whitespace-pre-line">
            {siteContent.hours}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`https://www.facebook.com/${siteContent.facebookHandle}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-gold-500 transition-colors"
          >
            <FacebookIcon />
          </a>
          <a
            href={`https://www.instagram.com/${siteContent.instagramHandle}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-gold-500 transition-colors"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>

      <p className="text-foreground/40 border-border border-t px-6 py-4 text-center text-xs">
        © {new Date().getFullYear()} {siteContent.businessName}. Todos os
        direitos reservados.
      </p>
    </footer>
  );
}
