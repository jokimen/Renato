import Image from "next/image";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

// Falls back to a charcoal/gold gradient block when no real photo has been
// supplied yet, so sections never break while the client's real photos are
// pending (Instagram/Facebook photos can't be scraped automatically).
export function PlaceholderImage({
  src,
  alt,
  className,
  sizes,
  priority,
}: PlaceholderImageProps) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "from-surface-muted to-background absolute inset-0 h-full w-full overflow-hidden bg-gradient-to-br via-black/40",
          className,
        )}
      >
        <div className="via-gold-500/10 absolute inset-0 bg-gradient-to-tr from-transparent to-transparent" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "100vw"}
      priority={priority}
      className={cn("object-cover object-center", className)}
    />
  );
}
