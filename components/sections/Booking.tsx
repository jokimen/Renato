import { SectionHeading } from "@/components/ui/SectionHeading";
import { CALENDLY_READY } from "@/lib/calendly";
import { CalendlyEmbed } from "./CalendlyEmbed";
import { BookingPreview } from "./BookingPreview";

export function Booking() {
  return (
    <section id="marcacoes" className="mx-auto max-w-4xl px-6 py-28">
      <SectionHeading
        eyebrow="Marcações"
        title="Reserve o seu horário"
        description="Escolha o dia e a hora que melhor lhe convêm — confirmação imediata."
      />

      {CALENDLY_READY ? <CalendlyEmbed /> : <BookingPreview />}
    </section>
  );
}
