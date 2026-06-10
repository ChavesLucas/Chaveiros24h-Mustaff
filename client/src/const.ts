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

export const MUSTAFF_BRAND = "Mustaff Chaveiro 24H";
export const MUSTAFF_PHONE = "(11) 94175-7511";
export const MUSTAFF_WHATSAPP_LINK =
  "https://wa.me/5511941757511?text=Ol%C3%A1%2C%20preciso%20de%20um%20atendimento%20da%20Mustaff%20Chaveiro%2024H.";


export const NICHES: Record<string, NicheData> = {
  "chaveiro-24h": {
    id: "chaveiro-24h",
    title: MUSTAFF_BRAND,
    subtitle: "Chaveiro 24 horas especializado",
    description:
      "Atendimento 24h para abertura de portas, abertura veicular, troca de fechaduras, fechaduras eletrônicas, chaves codificadas e reforço de segurança em São Paulo e região.",
    metaDescription:
      "Mustaff Chaveiro 24H: chaveiro profissional para fechaduras eletrônicas, abertura de portas, abertura veicular, chaves codificadas e reforço de segurança.",
    badgeUrl: "/manus-storage/01_chaveiro_24h_badge_096977f7.webp",
    phone: MUSTAFF_PHONE,
    whatsappUrl: MUSTAFF_WHATSAPP_LINK,
    services: [
      {
        title: "Fechaduras Eletrônicas",
        description: "Instalação, configuração, troca e manutenção de fechaduras digitais, biométricas e smart locks.",
      },
      {
        title: "Troca de Fechaduras",
        description: "Troca de fechaduras residenciais, comerciais e de alta segurança com orientação técnica.",
      },
      {
        title: "Abertura de Portas",
        description: "Abertura de casas, apartamentos e escritórios com técnica e prioridade para não danificar.",
      },
      {
        title: "Abertura Veicular",
        description: "Abertura de carros nacionais e importados, executada com cuidado para preservar o veículo.",
      },
      {
        title: "Chaves Codificadas",
        description: "Programação, cópias e chaves presenciais para necessidades automotivas e sistemas modernos.",
      },
      {
        title: "Reforço de Segurança",
        description: "Troca de cilindros, instalação de travas extras e fechaduras de alta segurança.",
      },
    ],
    faqs: [
      {
        question: "A Mustaff atende 24 horas?",
        answer: "Sim. O atendimento é 24 horas para emergências residenciais, comerciais e automotivas.",
      },
      {
        question: "Vocês trabalham com fechaduras eletrônicas?",
        answer:
          "Sim. A Mustaff realiza instalação, configuração, troca e manutenção de fechaduras eletrônicas de diferentes marcas.",
      },
      {
        question: "A abertura é feita sem danos?",
        answer:
          "O atendimento prioriza técnicas sem dano sempre que o estado da fechadura, porta ou veículo permite esse procedimento com segurança.",
      },
    ],
    testimonials: [
      {
        name: "Cliente Mustaff",
        rating: 5,
        text: "Atendimento rápido e muito profissional para instalação de fechadura eletrônica.",
        date: "Avaliação recente",
      },
    ],
  },
};
