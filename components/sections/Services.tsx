"use client";

import { motion } from "framer-motion";
import { Scissors } from "lucide-react";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Serviços"
        title="Preçário"
        description="Preços simples e transparentes, sem surpresas."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteContent.services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <TiltCard className="flex h-full flex-col justify-between p-6">
              <div>
                <Scissors className="text-gold-500 mb-4" size={22} />
                <h3 className="font-display text-lg">{service.name}</h3>
                {service.priceLabel && (
                  <p className="text-foreground/50 mt-1 text-sm">
                    {service.priceLabel}
                  </p>
                )}
              </div>
              <p className="text-gold-500 mt-6 text-3xl font-semibold">
                {service.price}€
              </p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
