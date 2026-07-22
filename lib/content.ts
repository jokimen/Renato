import type { SiteContent } from "./types";

// Real business data confirmed from the client's public Facebook page
// (facebook.com/R.J.Cabeleireiro). Team, testimonials and gallery photos
// are placeholders until the client supplies real content.
export const siteContent: SiteContent = {
  businessName: "R.J. Cabeleireiros",
  tagline: "Cabeleireiro de precisão em Trofa",
  address: "Rua D. Pedro V, Edifício Concorde, Loja 3, Trofa, Portugal",
  phone: "+351914346731",
  phoneDisplay: "914 346 731",
  instagramHandle: "rjcabeleireiros",
  facebookHandle: "R.J.Cabeleireiro",
  // TODO: replace with real opening hours from the client
  hours: "Seg–Sáb: 09h00–19h00",
  services: [
    { id: "corte", name: "Corte de cabelo", price: 13 },
    { id: "corte-maquina", name: "Corte à máquina", price: 11 },
    {
      id: "corte-maquina-recorrente",
      name: "Corte à máquina",
      priceLabel: "15 em 15 dias",
      price: 8,
    },
    { id: "barba-maquina", name: "Barba à máquina", price: 1 },
    {
      id: "barba-lamina",
      name: "Barba à lâmina",
      priceLabel: "só contornos",
      price: 5,
    },
  ],
  // TODO: replace with real team members provided by the client
  team: [
    {
      id: "cabeleireiro-1",
      name: "Cabeleireiro 1",
      role: "Cabeleireiro principal",
      bio: "Especialista em cortes clássicos e modernos, com atenção ao detalhe em cada acabamento.",
    },
  ],
  // TODO: replace with real customer testimonials
  testimonials: [
    {
      id: "placeholder-1",
      author: "Cliente R.J.",
      quote:
        "Atendimento impecável e resultado sempre perfeito. Recomendo de olhos fechados.",
      rating: 5,
    },
  ],
  gallery: [
    {
      id: "g1",
      src: "",
      alt: "Corte de cabelo em destaque",
      category: "Cortes",
    },
    { id: "g2", src: "", alt: "Trabalho de barba", category: "Barba" },
    { id: "g3", src: "", alt: "Interior do salão", category: "Espaço" },
    { id: "g4", src: "", alt: "Detalhe de acabamento", category: "Cortes" },
  ],
  social: {
    followers: 529,
    recommendPercent: 100,
    reviewCount: 5,
  },
};
