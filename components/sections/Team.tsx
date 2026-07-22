"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FlipCard } from "@/components/ui/FlipCard";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Team() {
  return (
    <section id="equipa" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Equipa" title="Quem cuida do seu corte" />

      <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-8">
        {siteContent.team.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="w-full max-w-[280px]"
          >
            <FlipCard
              className="aspect-[3/4] w-full"
              front={
                <div className="border-border relative h-full w-full overflow-hidden rounded-2xl border">
                  <PlaceholderImage alt={member.name} />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="font-display text-lg text-white">
                      {member.name}
                    </p>
                    <p className="text-gold-400 text-sm">{member.role}</p>
                  </div>
                </div>
              }
              back={
                <div className="bg-surface border-border flex h-full w-full flex-col items-center justify-center rounded-2xl border p-6 text-center">
                  <p className="font-display text-gold-500 mb-2 text-lg">
                    {member.name}
                  </p>
                  <p className="text-foreground/70 text-sm">{member.bio}</p>
                </div>
              }
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
