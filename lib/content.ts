import type { SiteContent } from "./types";

// Real business data confirmed from the client's public Facebook page
// (facebook.com/R.J.Cabeleireiro) and Google Maps listing (4.8/5, 51
// críticas). Team and gallery photos are placeholders until the client
// supplies real content; testimonials are real Google reviews.
export const siteContent: SiteContent = {
  businessName: "R.J. Cabeleireiros",
  tagline: "Cabeleireiro de precisão em Trofa",
  address: "Rua D. Pedro V, Edifício Concorde, Loja 3, Trofa, Portugal",
  phone: "+351914346731",
  phoneDisplay: "914 346 731",
  instagramHandle: "r.j.cabeleireiros",
  facebookHandle: "R.J.Cabeleireiro",
  calendlyUrl: "https://calendly.com/renatooliveira1804",
  hours: "Terça a Sexta: 09h00–19h30\nSábado: 08h30–19h00\nSegunda: Fechado",
  services: [
    { id: "corte", name: "Corte de cabelo", price: 14 },
    { id: "corte-maquina", name: "Corte à máquina", price: 12 },
    {
      id: "corte-maquina-recorrente",
      name: "Corte à máquina",
      priceLabel: "15 em 15 dias",
      price: 9,
    },
    { id: "barba-maquina", name: "Barba à máquina", price: 2 },
    {
      id: "barba-lamina",
      name: "Barba à lâmina",
      priceLabel: "só contornos",
      price: 6,
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
  // Real Google reviews (confirmed on the business's Google Maps listing,
  // 4.8/5 from 51 críticas total). Only 3 were reliably extractable via
  // automated tools — TODO: add more of the real 51 reviews here if the
  // client wants a fuller carousel (pick from google.com/maps directly).
  testimonials: [
    {
      id: "google-paulo-jorge",
      author: "Paulo Jorge",
      quote:
        "Encontrei através do Maps e tive alguém disponível do outro lado. De fácil acesso e fácil de encontrar. Marquei para as 8h da manhã e quando cheguei já estava à minha espera.",
      rating: 5,
    },
    {
      id: "google-nuno-oliveira",
      author: "Nuno Oliveira",
      quote: "Bom serviço, boa conversa! Preço qualidade muito bem adequado!",
      rating: 5,
    },
    {
      id: "google-cesar-mesquita",
      author: "Cesar Mesquita",
      quote:
        "Salão muito limpo, muita higiene. Parabéns pela maneira como recebe os clientes.",
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
    googleReviewCount: 51,
    googleRating: 4.8,
    yearsExperience: 25,
  },
};
