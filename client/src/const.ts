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
    subtitle: "Ficou na rua? A gente abre na hora!",
    description: "Trancado para fora de casa, chave dentro do carro ou fechadura travada? O chaveiro 24h da Labz vai até você e resolve a emergência rápido com segurança.",
    metaDescription: "Chaveiro 24 horas em São Paulo: abertura de portas e veículos, troca de fechaduras, fechaduras eletrônicas e chaves codificadas. Atendimento emergencial rápido.",
    badgeUrl: "/manus-storage/01_chaveiro_24h_badge_096977f7.webp",
    phone: LABZ_PHONE,
    whatsappUrl: "https://wa.me/5511941757511?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Labz%20e%20preciso%20de%3A%20Chaveiro%2024%20Horas.",
    services: [
      { title: "Abertura de portas", description: "Ficou trancado do lado de fora? Abrimos portas residenciais e comerciais sem danificar a fechadura." },
      { title: "Abertura de veículos", description: "Chave trancada dentro do carro ou porta travada? Resolvemos na hora com ferramentas especiais." },
      { title: "Troca de fechaduras", description: "Substituição rápida por modelos novos, mais seguros e modernos para sua casa ou comércio." },
      { title: "Fechaduras eletrônicas", description: "Instalação e configuração de fechaduras digitais, biométricas e inteligentes com integração por app." },
      { title: "Chaves codificadas", description: "Cópia, confecção e programação de transponder, telecomando e chaves presenciais (Keyless)." },
      { title: "Reforço de segurança", description: "Instalação de fechaduras tetra, trincos, travas de segurança adicionais e olho mágico." }
    ],
    faqs: [
      { question: "Quanto tempo demora para chegar?", answer: "Trabalhamos para chegar o mais rápido possível. Como atendemos 24h em São Paulo e região metropolitana, enviamos o profissional mais próximo imediatamente após o seu chamado." },
      { question: "Vocês abrem a porta sem quebrar a fechadura?", answer: "Na maioria dos casos, sim. Nossos profissionais utilizam técnicas modernas de abertura que preservam o cilindro e a estrutura da porta, evitando danos desnecessários." },
      { question: "Atendem de madrugada e finais de semana?", answer: "Sim! O chaveiro 24 horas funciona de forma ininterrupta todos os dias da semana, incluindo madrugadas, domingos e feriados. Emergência não tem hora, e nós também não." }
    ],
    testimonials: [
      {
        name: "Claudio Souza",
        rating: 5,
        text: "Excelente profissional, serviço de ótima qualidade! Atendeu super rápido na madrugada quando fiquei trancado para fora do apartamento.",
        date: "Há 1 semana"
      },
      {
        name: "Renata Martins",
        rating: 5,
        text: "Já precisei dos serviços várias vezes e sempre me atendeu muito bem. Super honesto e o preço foi muito justo.",
        date: "Há 2 semanas"
      },
      {
        name: "Thiago Oliveira",
        rating: 5,
        text: "Muito bom, faz tudo certinho, tem um trabalho muito interessante e ótimo. Abriu meu carro importado sem um único arranhão.",
        date: "Há 1 mês"
      }
    ]
  },
  "eletricista-hidraulica": {
    id: "eletricista-hidraulica",
    title: "Elétrica e Hidráulica",
    subtitle: "Instalação e manutenção sem dor de cabeça",
    description: "Tomada que não funciona, disjuntor caindo, vazamento ou torneira pingando? Resolvemos problemas elétricos e hidráulicos com total segurança, rapidez e preço justo.",
    metaDescription: "Eletricista e encanador em São Paulo: instalações elétricas, manutenção, troca de disjuntores, encanamento, vazamentos, torneiras e hidráulica em geral 24h.",
    badgeUrl: "/manus-storage/03_eletricista_badge_8cbc6028.webp",
    phone: LABZ_PHONE,
    whatsappUrl: "https://wa.me/5511941757511?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Labz%20e%20preciso%20de%3A%20Eletricista%20%26%20Hidr%C3%A1ulica.",
    services: [
      { title: "Instalações elétricas", description: "Novos pontos de tomada, fiação, luminárias, ventiladores e quadros de distribuição bem dimensionados." },
      { title: "Manutenção elétrica", description: "Revisão preventiva, correção de curto-circuito e diagnóstico de problemas de sobrecarga na rede." },
      { title: "Troca de disjuntores", description: "Substituição de disjuntores antigos ou com defeito para proteger seus aparelhos e sua família." },
      { title: "Encanamento e reparos", description: "Instalação e manutenção de tubulações de água limpa e esgoto, torneiras, registros e válvulas." },
      { title: "Caça vazamentos", description: "Localização precisa e correção de vazamentos internos com o mínimo de quebra de parede ou piso." },
      { title: "Instalações hidráulicas", description: "Montagem de sistemas de água quente/fria, instalação de chuveiros, duchas higiênicas e aquecedores." }
    ],
    faqs: [
      { question: "Vocês atendem emergências elétricas e vazamentos?", answer: "Sim, atendemos 24 horas. Casos de curto-circuito, cheiro de queimado nas tomadas ou vazamentos ativos que podem causar infiltrações são tratados com prioridade máxima." },
      { question: "O serviço elétrico é feito com segurança?", answer: "Sempre. Nossos eletricistas são qualificados e trabalham seguindo rigorosamente as normas técnicas de segurança, utilizando materiais adequados e certificados." },
      { question: "Conseguem achar o vazamento sem quebrar tudo?", answer: "Sim. Buscamos sempre localizar a origem exata do vazamento antes de qualquer intervenção, quebrando apenas o ponto estritamente necessário para o reparo." }
    ],
    testimonials: [
      {
        name: "Marcos Vinicius",
        rating: 5,
        text: "Excelente profissional, serviço de ótima qualidade! Resolve de verdade e explicou tudo certinho o que estava dando curto no chuveiro.",
        date: "Há 3 dias"
      },
      {
        name: "Juliana Costa",
        rating: 5,
        text: "Precisei do encanador com urgência por conta de um vazamento no registro e fui atendida em menos de 40 minutos. Recomendo muito!",
        date: "Há 1 semana"
      }
    ]
  },
  "encanador-24h": {
    id: "encanador-24h",
    title: "Encanador 24 Horas",
    subtitle: "Vazamentos, entupimentos ou canos rompidos?",
    description: "Infiltração na parede, esgoto voltando, torneira vazando ou caixa d'água transbordando? Nossos encanadores especializados resolvem qualquer problema hidráulico com rapidez, limpeza e garantia.",
    metaDescription: "Encanador 24 horas em São Paulo: caça vazamentos, desentupimento, conserto de canos, troca de torneiras, registros e reparos hidráulicos urgentes.",
    badgeUrl: "/manus-storage/04_encanador_badge_b1f81959.webp",
    phone: LABZ_PHONE,
    whatsappUrl: "https://wa.me/5511941757511?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Labz%20e%20preciso%20de%3A%20Encanador%2024h.",
    services: [
      { title: "Caça vazamentos", description: "Detecção eletrônica e precisa de vazamentos ocultos sob o piso ou dentro de paredes, evitando quebras desnecessárias." },
      { title: "Desentupimento geral", description: "Desentupimento rápido de pias, ralos, vasos sanitários, tanques e redes de esgoto com equipamentos modernos." },
      { title: "Conserto de canos e tubulações", description: "Reparo e substituição de canos de PVC, cobre, PPR ou ferro, solucionando vazamentos e infiltrações na hora." },
      { title: "Troca de torneiras e registros", description: "Instalação e troca de torneiras de todos os modelos, misturadores, registros de pressão, gaveta e válvulas Hydra." },
      { title: "Limpeza de caixa d'água", description: "Higienização e desinfecção completa de reservatórios residenciais e comerciais, além de regulagem de boias." },
      { title: "Manutenção hidráulica", description: "Revisão completa de sistemas de escoamento e abastecimento de água quente e fria para prevenção de problemas." }
    ],
    faqs: [
      { question: "Vocês cobram taxa de visita?", answer: "Não cobramos taxa de visita para orçamentos que podem ser avaliados pelo WhatsApp através de fotos, vídeos ou descrição detalhada do problema." },
      { question: "Como funciona a detecção de vazamentos?", answer: "Utilizamos equipamentos de geofone e ultrassom que detectam o ruído da água vazando sob a terra ou parede. Isso nos permite quebrar exatamente o local do cano quebrado." },
      { question: "O serviço tem garantia?", answer: "Sim, todos os nossos serviços hidráulicos contam com garantia formal para assegurar a qualidade e a durabilidade do reparo realizado." }
    ],
    testimonials: [
      {
        name: "Beatriz Nogueira",
        rating: 5,
        text: "Estava com uma infiltração horrível no banheiro que já estava estragando o quarto. O encanador achou o ponto exato do cano furado em minutos e resolveu tudo no mesmo dia.",
        date: "Há 2 dias"
      },
      {
        name: "Guilherme Santos",
        rating: 5,
        text: "Chamei no domingo de manhã para desentupir a pia da cozinha que estava transbordando. Chegaram muito rápido e resolveram com equipamento profissional. Excelente!",
        date: "Há 1 semana"
      }
    ]
  },
  "assistencia-veicular": {
    id: "assistencia-veicular",
    title: "Assistência Veicular 24h",
    subtitle: "Socorro automotivo onde você estiver!",
    description: "Bateria descarregou, pneu furou, pane elétrica ou precisa de um guincho? Nosso socorro mecânico e reboque 24 horas atende em qualquer ponto de São Paulo e região metropolitana com agilidade.",
    metaDescription: "Assistência veicular e guincho 24 horas em São Paulo: reboque de carros e motos, carga de bateria (chupeta), troca de pneu e chaveiro automotivo urgente.",
    badgeUrl: "/manus-storage/02_assistencia_veicular_badge_d9a7c58d.webp",
    phone: LABZ_PHONE,
    whatsappUrl: "https://wa.me/5511941757511?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Labz%20e%20preciso%20de%3A%20Assist%C3%AAncia%20Veicular%2024h.",
    services: [
      { title: "Guincho e Reboque 24h", description: "Transporte seguro de carros, motos e utilitários leves para oficinas, concessionárias ou residências." },
      { title: "Carga de Bateria (Chupeta)", description: "Socorro rápido para veículos que não ligam devido a bateria descarregada, com teste de alternador incluso." },
      { title: "Troca de Pneu Auxílio", description: "Substituição do pneu furado pelo estepe ou remoção do veículo caso o estepe também esteja inutilizável." },
      { title: "Pane Elétrica ou Mecânica", description: "Diagnóstico rápido no local para tentar solucionar problemas simples de funcionamento e liberar o veículo." },
      { title: "Chaveiro Automotivo Emergencial", description: "Abertura de portas de veículos trancados com a chave dentro ou confecção de chaves reservas no local." },
      { title: "Auxílio Pane Seca (Combustível)", description: "Suporte com abastecimento emergencial de combustível ou reboque até o posto de abastecimento mais próximo." }
    ],
    faqs: [
      { question: "Qual o tempo médio de chegada do guincho?", answer: "Nosso tempo médio de resposta para chamados de guincho e socorro veicular na capital é de 30 a 50 minutos, dependendo das condições do trânsito e da localização." },
      { question: "Vocês guincham motos e utilitários?", answer: "Sim, nossa frota possui plataformas adequadas para o transporte seguro de motocicletas, carros de passeio, SUVs e vans utilitárias de pequeno porte." },
      { question: "Como funciona o pagamento do socorro?", answer: "Aceitamos pagamentos via PIX, cartões de crédito e débito diretamente com o motorista do guincho ou socorrista no local do atendimento." }
    ],
    testimonials: [
      {
        name: "Alessandro Lima",
        rating: 5,
        text: "Fiquei parado na Marginal Pinheiros à noite com pneu furado e sem estepe. O guincho chegou super rápido e o motorista foi extremamente profissional e educado.",
        date: "Há 4 dias"
      },
      {
        name: "Patrícia Menezes",
        rating: 5,
        text: "Meu carro não ligava na garagem do prédio de manhã cedo. Chamei a Labz e em 30 minutos o socorrista veio, deu a carga na bateria e testou tudo. Serviço excelente!",
        date: "Há 2 semanas"
      }
    ]
  },
  "marido-de-aluguel": {
    id: "marido-de-aluguel",
    title: "Marido de Aluguel",
    subtitle: "A sua lista de tarefas resolvida hoje",
    description: "Aquele móvel para montar, a TV para instalar ou o reparo que ficou para depois? A Labz manda um profissional de confiança até você e resolve tudo de uma vez só.",
    metaDescription: "Marido de aluguel em São Paulo: montagem de móveis, suportes de TV, cortinas, luminárias, ventiladores, chuveiros e pequenos reparos. Atendimento rápido 24h.",
    badgeUrl: "/manus-storage/05_marido_de_aluguel_badge_fe630401.webp",
    phone: LABZ_PHONE,
    whatsappUrl: "https://wa.me/5511941757511?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Labz%20e%20preciso%20de%3A%20Marido%20de%20Aluguel.",
    services: [
      { title: "Montagem de móveis", description: "Montagem e desmontagem de guarda-roupas, estantes, camas, mesas, racks, painéis e móveis comprados na internet." },
      { title: "Suporte de TV", description: "Instalação segura e perfeitamente nivelada de televisores em paredes de alvenaria, drywall ou painéis de madeira." },
      { title: "Cortinas e persianas", description: "Fixação e alinhamento de trilhos, varões, persianas romanas, rolo ou verticais em qualquer ambiente." },
      { title: "Luminárias e ventiladores", description: "Instalação de lustres, spots, painéis de LED e ventiladores de teto com fixação firme e segura." },
      { title: "Instalação de chuveiros", description: "Troca e instalação de chuveiros elétricos, duchas e troca de resistências queimadas com segurança elétrica." },
      { title: "Pequenos reparos", description: "Ajuste de portas de armários, troca de dobradiças, puxadores, instalação de prateleiras, quadros e espelhos." }
    ],
    faqs: [
      { question: "Vocês cobram visita para orçamento?", answer: "Não cobramos taxa de visita para orçamentos que podem ser resolvidos pelo WhatsApp. Você nos envia fotos ou descreve o que precisa e passamos o valor na hora." },
      { question: "Posso pedir vários serviços de uma vez?", answer: "Sim! O grande diferencial do marido de aluguel é justamente a versatilidade. Você pode fazer uma lista de tarefas (instalar TV, pendurar quadro, trocar chuveiro) e o profissional resolve tudo em uma única visita." },
      { question: "Vocês trazem as ferramentas necessárias?", answer: "Sim, nossos profissionais chegam totalmente equipados com ferramentas de primeira linha para perfuração, fixação e ajustes. Você só precisa fornecer as peças que serão instaladas." }
    ],
    testimonials: [
      {
        name: "Carlos Eduardo",
        rating: 5,
        text: "O montador foi extremamente caprichoso. Montou meu guarda-roupas grande com perfeição e ainda me ajudou a instalar o suporte da TV. Nota 10!",
        date: "Há 4 dias"
      },
      {
        name: "Patrícia Lima",
        rating: 5,
        text: "Trabalho muito limpo e organizado. Instalou todas as cortinas e espelhos do meu apartamento novo super rápido.",
        date: "Há 2 semanas"
      }
    ]
  },
  "desbloqueio-conta-bancaria": {
    id: "desbloqueio-conta-bancaria",
    title: "Desbloqueio de Conta Bancária",
    subtitle: "Advogada especialista em Direito Bancário",
    description: "Bloqueio de conta, penhora online ou restrição no CPF? A advogada Isabela Prado atua com urgência para defender seus direitos bancários e desbloquear seu dinheiro.",
    metaDescription: "Advogada especialista em direito bancário para desbloqueio de conta, reversão de bloqueio de penhora, defesa em ações bancárias e negociação de contratos.",
    badgeUrl: "https://images.unsplash.com/photo-1521790945508-bf2a36314e85?auto=format&fit=crop&w=800&q=80",
    phone: LABZ_PHONE,
    whatsappUrl: "https://wa.me/5511941757511?text=Ol%C3%A1%21%20Preciso%20de%20atendimento%20com%20a%20Advogada%20Isabela%20Prado%20para%20desbloqueio%20de%20conta%20banc%C3%A1ria.",
    services: [
      { title: "Desbloqueio de conta corrente", description: "Ação urgente para liberação de saldo bloqueado por ordem judicial ou decisão administrativa do banco." },
      { title: "Defesa em penhora online", description: "Análise jurídica e defesa contra bloqueios de valores em contas e aplicativos bancários." },
      { title: "Contestação de débito indevido", description: "Revisão de lançamentos, cobrança abusiva e contestação de valores não reconhecidos pelo cliente." },
      { title: "Negociação bancária", description: "Negociação de acordo com o banco para liberação imediata de valores e redução de encargos." },
      { title: "Ação cautelar e tutela de urgência", description: "Pedido rápido ao juiz para suspender bloqueios e restabelecer o acesso à conta." },
      { title: "Análise de contrato bancário", description: "Avaliação de cláusulas abusivas, tarifas e operações para construir a melhor estratégia jurídica." }
    ],
    faqs: [
      { question: "O bloqueio da conta pode ser liberado rapidamente?", answer: "Sim, quando há fundamento jurídico claro e documentos corretos, podemos pedir urgência ao juiz e acelerar o desbloqueio." },
      { question: "Preciso pagar o banco antes de desbloquear a conta?", answer: "Não. Nosso trabalho é buscar a liberação do bloqueio e a defesa do seu direito, sem depender do pagamento imediato de valores que podem ser indevidos." },
      { question: "Atende cases de penhora e retenção de valores?", answer: "Sim, cuidamos de penhoras online, retenção de créditos e outras medidas que impedem o uso da conta bancária." }
    ],
    testimonials: [
      {
        name: "Luciana Andrade",
        rating: 5,
        text: "A Dra. Isabela conseguiu liberar o acesso à minha conta em poucos dias e ainda me orientou sobre como evitar novos bloqueios. Atendimento excepcional.",
        date: "Há 1 semana"
      },
      {
        name: "Eduardo Ferreira",
        rating: 5,
        text: "Meu salário foi desbloqueado depois de uma mensagem apenas. Profissional muito competente e rápida. Recomendo para quem tem problema com banco.",
        date: "Há 2 semanas"
      }
    ]
  },
  "reformas-alvenaria": {
    id: "reformas-alvenaria",
    title: "Reformas e Alvenaria",
    subtitle: "A reforma que você quer, do jeito certo",
    description: "De um pequeno reparo na parede ao imóvel inteiro: pintura, alvenaria, reboco e assentamento de pisos com acabamento impecável e um prazo que cabe na sua rotina.",
    metaDescription: "Reformas residenciais e comerciais em São Paulo: pintura, alvenaria, reboco, pisos e pequenas obras. Equipe qualificada, organizada e sem dor de cabeça.",
    badgeUrl: "/manus-storage/06_reformas_alvenaria_badge_8c3ec1eb.webp",
    phone: LABZ_PHONE,
    whatsappUrl: "https://wa.me/5511941757511?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Labz%20e%20preciso%20de%3A%20Reformas%20%26%20Alvenaria.",
    services: [
      { title: "Reformas residenciais", description: "Renovação completa ou parcial de casas e apartamentos, cuidando de cada detalhe do planejamento à entrega." },
      { title: "Reformas comerciais", description: "Adequação de lojas, escritórios, salas comerciais e consultórios com foco em agilidade para não parar seu negócio." },
      { title: "Pintura profissional", description: "Pintura interna e externa, aplicação de massa corrida, textura, grafiato e verniz com acabamento de alto padrão." },
      { title: "Alvenaria e reboco", description: "Construção de paredes, muros, divisórias, aplicação de reboco, emboço e correções estruturais." },
      { title: "Assentamento de pisos", description: "Instalação profissional de porcelanatos, cerâmicas, pisos vinílicos, laminados, azulejos e pastilhas." },
      { title: "Pequenas obras e reparos", description: "Pequenas demolições, aberturas de vãos, reparos em calçadas, impermeabilização de superfícies e acabamentos." }
    ],
    faqs: [
      { question: "Vocês fazem orçamento de reforma no local?", answer: "Sim. Para reformas e obras de médio/grande porte, agendamos uma visita técnica sem compromisso para avaliar a estrutura, tirar medidas e fornecer uma proposta comercial precisa." },
      { question: "Dá para contratar apenas um serviço isolado?", answer: "Com certeza. Realizamos desde serviços rápidos como pintura de uma única sala ou troca de piso de um banheiro até reformas estruturais completas." },
      { question: "Vocês cuidam da compra do material?", answer: "Trabalhamos de duas formas: podemos fornecer apenas a mão de obra especializada (ficando a compra sob responsabilidade do cliente) ou gerenciar toda a compra e entrega dos materiais necessários." }
    ],
    testimonials: [
      {
        name: "Fernanda Rocha",
        rating: 5,
        text: "Fizeram a pintura completa da minha sala e o acabamento ficou perfeito. Muito organizados, cobriram tudo e deixaram a casa limpa.",
        date: "Há 1 semana"
      },
      {
        name: "Roberto Albuquerque",
        rating: 5,
        text: "Instalaram porcelanato em toda a minha cozinha e lavanderia. O alinhamento ficou impecável, profissionais de altíssimo nível.",
        date: "Há 3 semanas"
      }
    ]
  }
};
