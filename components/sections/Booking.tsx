import { SectionHeading } from "@/components/ui/SectionHeading";
import { CalendlyEmbed } from "./CalendlyEmbed";
import { BookingPreview } from "./BookingPreview";

// Flip to true once the client has created a real Event Type with a
// connected calendar in their Calendly account — otherwise the embed
// just shows "No openings at the moment" to every visitor.
const CALENDLY_READY = false;

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
