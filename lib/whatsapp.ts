import { siteContent } from "./content";

export function getWhatsAppUrl(message = "Olá! Gostaria de mais informações.") {
  const number = siteContent.phone.replace(/\D/g, "");
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${number}?${params.toString()}`;
}
