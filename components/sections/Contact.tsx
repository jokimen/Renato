"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

const CONTACT_ITEMS = [
  { icon: MapPin, label: "Morada", value: siteContent.address },
  { icon: Phone, label: "Telefone", value: siteContent.phoneDisplay },
  { icon: Clock, label: "Horário", value: siteContent.hours },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // Local-state only for now — wiring to a real API route is out of scope
  // for this phase (no backend endpoint exists yet).
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Contacto" title="Fale connosco" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <span className="bg-gold-500/10 text-gold-500 flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-foreground/50 text-xs tracking-wide uppercase">
                    {label}
                  </p>
                  <p className="mt-0.5 whitespace-pre-line">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-border overflow-hidden rounded-2xl border">
            <iframe
              title="Mapa — R.J.Cabeleireiros, Trofa"
              width="100%"
              height="260"
              loading="lazy"
              className="border-0 contrast-[1.1] grayscale invert-[0.92]"
              src={`https://www.google.com/maps?q=${encodeURIComponent(siteContent.address)}&output=embed`}
            />
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-surface border-border flex flex-col gap-4 rounded-2xl border p-6"
        >
          <div>
            <label
              className="text-foreground/60 mb-1 block text-xs uppercase"
              htmlFor="name"
            >
              Nome
            </label>
            <input
              id="name"
              required
              className="border-border focus:border-gold-500 w-full rounded-lg border bg-transparent px-3 py-2 text-sm outline-none"
            />
          </div>
          <div>
            <label
              className="text-foreground/60 mb-1 block text-xs uppercase"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="border-border focus:border-gold-500 w-full rounded-lg border bg-transparent px-3 py-2 text-sm outline-none"
            />
          </div>
          <div>
            <label
              className="text-foreground/60 mb-1 block text-xs uppercase"
              htmlFor="message"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="border-border focus:border-gold-500 w-full rounded-lg border bg-transparent px-3 py-2 text-sm outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-gold-500 hover:bg-gold-400 mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-black transition-colors"
          >
            <Mail size={16} />
            {submitted ? "Enviado!" : "Enviar mensagem"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
