export interface ServiceItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  rating: number;
  text: string;
  date: string;
  role?: string;
}

export interface NicheData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metaDescription: string;
  badgeUrl: string;
  phone: string;
  whatsappUrl: string;
  services: ServiceItem[];
  faqs: FaqItem[];
  testimonials: TestimonialItem[];
}

export const LABZ_PHONE = "(11) 94175-7511";
export const LABZ_WHATSAPP_LINK = "https://wa.me/5511941757511?text=Ol%C3%A1%21%20Preciso%20de%20um%20atendimento%20da%20LabzServi%C3%A7os%2024h.";

export const NICHES: Record<string, NicheData> = {
  "chaveiro-24h": {
    id: "chaveiro-24h",
    title: "Chaveiro 24 Horas",
    subtitle: "Fechaduras eletrônicas, chaves automotivas e abertura residencial",
    description:
      "Atendimento urgente em São Paulo e região para abertura de portas, veículos, troca de fechaduras e serviços de segurança com foco em fechaduras eletrônicas e chaves codificadas.",
    metaDescription:
      "Chaveiro 24 horas em São Paulo especializado em fechaduras eletrônicas, chaves automotivas, troca de fechaduras e abertura de portas. Atendimento rápido e seguro.",
    badgeUrl: "/manus-storage/01_chaveiro_24h_badge_096977f7.webp",
    phone: LABZ_PHONE,
    whatsappUrl:
      "https://wa.me/5511941757511?text=Ol%C3%A1%21%20Preciso%20de%20um%20chaveiro%20especializado%20em%20fechaduras%20eletr%C3%B4nicas%20e%20chaves%20automotivas.",
    services: [
      {
        title: "Abertura de portas e troca de miolos",
        description:
          "Abrimos portas residenciais e comerciais sem danificar a fechadura, com troca de miolos no mesmo atendimento quando necessário.",
      },
      {
        title: "Abertura de veículos",
        description:
          "Abertura de carros e motos sem danos, incluindo veículos com sistemas modernos e travas eletrônicas.",
      },
      {
        title: "Troca de fechaduras",
        description:
          "Foco total em troca de fechaduras comuns e de alta segurança, com instalação rápida e recomendação por tipo de porta.",
      },
      {
        title: "Fechaduras eletrônicas",
        description:
          "Instalação, manutenção e configuração de fechaduras digitais, biométricas e smart locks para residências e condomínios.",
      },
      {
        title: "Chaves codificadas",
        description:
          "Cópia, programação de transponders, chaves telecomando e chaves presenciais para carros e portas eletrônicas.",
      },
      {
        title: "Reforço de segurança",
        description:
          "Instalação de travas, cilindros especiais, trincos e dispositivos de proteção para aumentar a segurança da sua porta.",
      },
    ],
    faqs: [
      {
        question: "Vocês atendem emergências de madrugada?",
        answer:
          "Sim. Nosso chaveiro 24h atende de madrugada, domingos e feriados em toda a capital e região metropolitana.",
      },
      {
        question: "Trocam fechaduras eletrônicas e miolos no mesmo atendimento?",
        answer:
          "Sim. Levamos peças, digitais e miolos compatíveis para resolver o problema na hora, sem precisar de nova visita.",
      },
      {
        question: "Fazem chaves codificadas e cópias de controle remoto?",
        answer:
          "Fazemos chaves codificadas, chaves automotivas, controle remoto e chaves simples para portas residenciais e comerciais.",
      },
    ],
    testimonials: [
      {
        name: "Claudio Souza",
        rating: 5,
        text:
          "Excelente serviço! Chegaram rápido e trocaram a fechadura eletrônica do meu apartamento sem complicação.",
        date: "Há 1 semana",
      },
      {
        name: "Renata Martins",
        rating: 5,
        text:
          "Meu carro não abria e o chaveiro abriu na hora. Tiraram a programação da chave e fizeram um novo comando.",
        date: "Há 2 semanas",
      },
      {
        name: "Thiago Oliveira",
        rating: 5,
        text:
          "O foco na troca de fechadura foi ótimo. Instalaram um modelo eletrônico novo e deixaram tudo funcionando perfeitamente.",
        date: "Há 1 mês",
      },
    ],
  },
};
