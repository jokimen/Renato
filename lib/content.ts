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
  instagramHandle: "r.j.cabeleireiros",
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
  // Placeholder testimonials (generic first-name + initial, standard
  // template practice) — TODO: replace with the client's real reviews
  // before this goes live for real, so visitors see genuine feedback.
  testimonials: [
    {
      id: "placeholder-1",
      author: "Ana M.",
      quote:
        "Atendimento impecável e resultado sempre perfeito. Recomendo de olhos fechados.",
      rating: 5,
    },
    {
      id: "placeholder-2",
      author: "Pedro S.",
      quote:
        "Profissionalismo do início ao fim. Já é o meu cabeleireiro de confiança.",
      rating: 5,
    },
    {
      id: "placeholder-3",
      author: "Rui T.",
      quote: "Corte impecável e ótimo ambiente. Voltarei sempre.",
      rating: 5,
    },
    {
      id: "placeholder-4",
      author: "Mariana C.",
      quote: "Atenção ao detalhe incrível. Saí exatamente como queria.",
      rating: 5,
    },
    {
      id: "placeholder-5",
      author: "João P.",
      quote: "Melhor cabeleireiro da zona. Preços justos e trabalho de qualidade.",
      rating: 5,
    },
    {
      id: "placeholder-6",
      author: "Sofia R.",
      quote: "Simpatia e profissionalismo em cada visita. Recomendo a todos.",
      rating: 4,
    },
    {
      id: "placeholder-7",
      author: "Miguel A.",
      quote: "Resultado sempre consistente, seja qual for o corte pedido.",
      rating: 5,
    },
    {
      id: "placeholder-8",
      author: "Beatriz F.",
      quote: "Espaço acolhedor e equipa muito atenta aos detalhes.",
      rating: 5,
    },
    {
      id: "placeholder-9",
      author: "Tiago N.",
      quote: "Já experimentei vários cabeleireiros na zona, este é o melhor.",
      rating: 5,
    },
    {
      id: "placeholder-10",
      author: "Carla D.",
      quote: "Marcação fácil e atendimento pontual. Fico sempre satisfeita.",
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
    { id: "g5", src: "", alt: "Coloração e styling", category: "Cortes" },
    { id: "g6", src: "", alt: "Ambiente de espera", category: "Espaço" },
  ],
  social: {
    followers: 529,
    recommendPercent: 100,
    reviewCount: 5,
  },
};
