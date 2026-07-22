import type { SiteContent } from "./types";

// Real business data confirmed from the client's public Facebook page
// (facebook.com/R.J.Cabeleireiro) and Google Maps listing (4.8/5, 51
// críticas). Team and gallery photos, and testimonials, are real
// content supplied by the client.
export const siteContent: SiteContent = {
  businessName: "R.J. Cabeleireiros",
  tagline: "Cabeleireiro de precisão em Trofa",
  address: "Rua D. Pedro V, Edifício Concorde, Loja 3, Trofa, Portugal",
  phone: "+351914346731",
  phoneDisplay: "914 346 731",
  instagramHandle: "r.j.cabeleireiros",
  facebookHandle: "R.J.Cabeleireiro",
  calendlyUrl: "https://calendly.com/renatooliveira1804",
  hours:
    "Terça a Sexta: 09h00–19h30\nSábado: 08h30–19h00\nDomingo e Segunda: Fechado",
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
  team: [
    {
      id: "renato-oliveira",
      name: "Renato Oliveira",
      role: "Cabeleireiro principal",
      bio: "Especialista em cortes clássicos e modernos, com atenção ao detalhe em cada acabamento.",
      photo: "/images/profissional.jpeg",
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
      src: "/images/galeria1.jpeg",
      alt: "Renato a finalizar um corte de cabelo",
      category: "Cortes",
    },
    {
      id: "g2",
      src: "/images/galeria2.jpeg",
      alt: "Corte de cabelo em curso",
      category: "Cortes",
    },
    {
      id: "g3",
      src: "/images/galeria3.jpeg",
      alt: "Interior do espaço R.J.Cabeleireiros",
      category: "Espaço",
    },
    {
      id: "g4",
      src: "/images/galeria4.jpeg",
      alt: "Estação de lavagem do salão",
      category: "Espaço",
    },
    {
      id: "g5",
      src: "/images/galeria5.jpeg",
      alt: "Acabamento de barba",
      category: "Barba",
    },
    {
      id: "g6",
      src: "/images/galeria6.jpeg",
      alt: "Detalhe de corte com desenho",
      category: "Cortes",
    },
  ],
  social: {
    followers: 529,
    recommendPercent: 100,
    googleReviewCount: 51,
    googleRating: 4.8,
    yearsExperience: 25,
  },
};
