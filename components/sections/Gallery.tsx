"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Gallery() {
  const categories = useMemo(
    () => ["Todos", ...new Set(siteContent.gallery.map((g) => g.category))],
    [],
  );
  const [active, setActive] = useState("Todos");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === "Todos"
      ? siteContent.gallery
      : siteContent.gallery.filter((g) => g.category === active);

  return (
    <section id="galeria" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Portfólio"
        title="Galeria"
        description="Um vislumbre do trabalho — fotos reais em breve."
      />

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              active === category
                ? "bg-gold-500 border-gold-500 text-black"
                : "border-border hover:border-gold-500 hover:text-gold-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((image, index) => (
          <motion.button
            key={image.id}
            type="button"
            onClick={() => setLightbox(image.id)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative block aspect-[4/5] w-full overflow-hidden rounded-xl"
          >
            <PlaceholderImage src={image.src || undefined} alt={image.alt} />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-black/90 p-6"
          >
            <button
              aria-label="Fechar"
              className="absolute top-6 right-6 text-white"
              onClick={() => setLightbox(null)}
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative aspect-[4/5] w-full max-w-lg"
            >
              <PlaceholderImage
                src={
                  siteContent.gallery.find((g) => g.id === lightbox)?.src ||
                  undefined
                }
                alt={
                  siteContent.gallery.find((g) => g.id === lightbox)?.alt ?? ""
                }
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
