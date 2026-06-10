import {
  BadgeCheck,
  Building2,
  Car,
  CheckCircle2,
  Clock3,
  DoorOpen,
  Home as HomeIcon,
  KeyRound,
  LockKeyhole,
  MapPin,
  MessageSquare,
  Phone,
  RefreshCw,
  Settings,
  ShieldCheck,
  ShieldPlus,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { MUSTAFF_PHONE, MUSTAFF_WHATSAPP_LINK } from "../const";

const serviceCards = [
  {
    title: "Fechaduras Eletrônicas",
    description:
      "Especialistas em fechaduras digitais, biométricas, smart locks e modelos de alto padrão para residências, condomínios e empresas.",
    items: ["Instalação", "Configuração", "Troca", "Manutenção"],
    icon: LockKeyhole,
    highlight: "Smart locks",
  },
  {
    title: "Troca de Fechaduras",
    description:
      "Substituição técnica de fechaduras, miolos e conjuntos completos com recomendação do modelo ideal para cada porta.",
    items: ["Residenciais", "Comerciais", "Alta segurança"],
    icon: RefreshCw,
    highlight: "Troca segura",
  },
  {
    title: "Abertura Emergencial de Portas",
    description:
      "Atendimento emergencial para abertura de casas, apartamentos e escritórios com técnica para preservar porta, batente e fechadura sempre que possível.",
    items: ["Casas", "Apartamentos", "Escritórios"],
    icon: DoorOpen,
    highlight: "Emergência 24h",
  },
  {
    title: "Abertura Veicular",
    description:
      "Atendimento automotivo para destravamento de veículos com técnica, agilidade e cuidado com acabamento interno e externo.",
    items: ["Carros nacionais", "Importados", "Sem danos"],
    icon: Car,
    highlight: "Auto 24h",
  },
  {
    title: "Chaves Codificadas",
    description:
      "Soluções para chaves automotivas e sistemas codificados, incluindo cópia, programação e orientação técnica.",
    items: ["Programação", "Cópias", "Chaves presenciais"],
    icon: KeyRound,
    highlight: "Codificação",
  },
  {
    title: "Reforço de Segurança",
    description:
      "Melhoria do nível de proteção do imóvel com cilindros, travas adicionais e fechaduras de alta segurança.",
    items: ["Troca de cilindros", "Travas extras", "Fechaduras de alta segurança"],
    icon: ShieldPlus,
    highlight: "Proteção extra",
  },
];

const processSteps = [
  {
    title: "Contato imediato",
    description:
      "Você chama pelo WhatsApp, informa o endereço e envia fotos ou detalhes do problema para agilizar o diagnóstico.",
  },
  {
    title: "Orientação e orçamento",
    description:
      "A equipe confirma o tipo de serviço, explica a solução indicada e informa o orçamento com transparência antes do deslocamento.",
  },
  {
    title: "Execução profissional",
    description:
      "O chaveiro chega equipado, executa o serviço com segurança e testa o funcionamento antes de finalizar o atendimento.",
  },
];

const differentials = [
  "Atendimento 24 horas, inclusive finais de semana e feriados",
  "Foco total em serviços de chaveiro residencial, comercial e automotivo",
  "Instalação e configuração de fechaduras eletrônicas modernas",
      "Abertura emergencial 24h com prioridade para preservar portas e veículos",
  "Orientação clara para aumentar a segurança do imóvel",
  "Atendimento rápido em São Paulo e região metropolitana",
];

const testimonials = [
  {
    name: "Marina A.",
    text:
      "Instalaram a fechadura eletrônica do meu apartamento e configuraram senha, tag e aplicativo. Atendimento muito cuidadoso.",
  },
  {
    name: "Eduardo R.",
    text:
      "Precisei abrir o carro de madrugada e resolveram sem dano nenhum. Chegaram rápido e explicaram tudo com clareza.",
  },
  {
    name: "Fernanda C.",
    text:
      "Trocaram cilindros e reforçaram a porta do escritório. Serviço limpo, profissional e com ótimo acabamento.",
  },
];

const telLink = MUSTAFF_PHONE.replace(/[^\d]/g, "");

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f4ee] text-slate-950 font-sans antialiased selection:bg-amber-300 selection:text-slate-950">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.20),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,118,110,0.22),transparent_36%)]" />
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(180deg,#fff_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-16 pb-14 md:pt-24 md:pb-20">
            <div className="lg:col-span-7 flex flex-col gap-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-amber-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.9)]" />
                Abertura emergencial 24H
              </div>

              <div className="space-y-5">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.94]">
                  Abertura Emergencial 24H com chaveiro profissional em São Paulo.
                </h1>
                <p className="text-base md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Mustaff Chaveiro 24H resolve abertura de portas, abertura veicular, troca de fechaduras, chaves codificadas e reforço de segurança com resposta rápida, acabamento profissional e atendimento direto pelo WhatsApp.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href={MUSTAFF_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-black text-white shadow-2xl shadow-emerald-700/25 transition-all duration-200 hover:bg-[#128C7E] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageSquare className="h-5 w-5" />
                  Pedir abertura emergencial
                </a>
                <a
                  href={`tel:${telLink}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-black text-white backdrop-blur transition-all duration-200 hover:bg-white/15 hover:border-white/40"
                >
                  <Phone className="h-5 w-5" />
                  {MUSTAFF_PHONE}
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                  <Clock3 className="mx-auto lg:mx-0 h-5 w-5 text-amber-300" />
                  <p className="mt-2 text-sm font-bold text-slate-100">Atendimento 24h</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                  <ShieldCheck className="mx-auto lg:mx-0 h-5 w-5 text-amber-300" />
                  <p className="mt-2 text-sm font-bold text-slate-100">Serviço técnico e seguro</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                  <MapPin className="mx-auto lg:mx-0 h-5 w-5 text-amber-300" />
                  <p className="mt-2 text-sm font-bold text-slate-100">São Paulo e região</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[520px]">
                <div className="absolute -inset-4 rounded-[2rem] bg-amber-300/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
                  <img
                    src="/mustaff-assets/fechaduras-eletronicas-marcas.png"
                    alt="Modelos de fechaduras eletrônicas atendidos pela Mustaff Chaveiro 24H"
                    className="h-[360px] md:h-[520px] w-full rounded-[1.5rem] object-cover"
                    loading="eager"
                  />
                  <div className="absolute right-5 top-5 flex items-center gap-3 rounded-2xl border border-amber-200/40 bg-white/92 p-3 pr-4 text-slate-950 shadow-2xl backdrop-blur">
                    <img
                      src="/mustaff-assets/mascote-mustaff-chaveiro-24h.webp"
                      alt="Mascote da Mustaff Chaveiro 24H"
                      className="h-16 w-16 rounded-xl object-cover"
                    />
                    <div className="hidden sm:block">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700">Plantão ativo</p>
                      <p className="text-sm font-black">Abertura 24H</p>
                    </div>
                  </div>
                  <div className="absolute left-6 right-6 bottom-6 rounded-2xl border border-white/20 bg-slate-950/82 p-4 text-left shadow-xl backdrop-blur-md">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">Fechaduras eletrônicas</p>
                    <p className="mt-1 text-sm text-slate-100">Instalação, configuração, troca e manutenção em modelos modernos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="emergencia" className="relative overflow-hidden bg-amber-300 py-8 text-slate-950">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-white/20 blur-3xl" />
          <div className="container relative z-10 grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="mx-auto h-24 w-24 overflow-hidden rounded-3xl border-4 border-white bg-white shadow-xl md:mx-0">
              <img
                src="/mustaff-assets/mascote-mustaff-chaveiro-24h.webp"
                alt="Mascote Mustaff Chaveiro 24H em atendimento emergencial"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-800">Abertura emergencial em destaque</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">Porta travou? Chave quebrou? Carro fechado?</h2>
              <p className="mt-3 max-w-3xl text-sm font-semibold leading-relaxed text-slate-800 md:text-base">
                Chame a Mustaff para abertura emergencial 24h em casas, apartamentos, escritórios e veículos, com atendimento rápido e técnica para evitar danos.
              </p>
            </div>
            <a
              href={MUSTAFF_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-base font-black text-white shadow-2xl shadow-emerald-700/30 transition-all hover:-translate-y-0.5 hover:bg-[#128C7E]"
            >
              <MessageSquare className="h-5 w-5" />
              Atendimento emergencial
            </a>
          </div>
        </section>

        <section className="bg-white border-b border-slate-200">
          <div className="container py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
              <p className="text-2xl font-black text-slate-950">24h</p>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Plantão diário</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
              <p className="text-2xl font-black text-slate-950">6</p>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Especialidades</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <p className="text-2xl font-black text-slate-950">Emergencial</p>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Abertura rápida</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
              <p className="text-2xl font-black text-slate-950">SP</p>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Capital e região</p>
            </div>
          </div>
        </section>

        <section id="servicos" className="py-16 md:py-24 bg-[#f7f4ee]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-amber-800">
                <Sparkles className="h-4 w-4" />
                Serviços profissionais de chaveiro
              </span>
              <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight text-slate-950">
                Soluções completas para acesso, fechaduras e segurança.
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-600">
                Serviços organizados para quem precisa de resposta rápida, orientação clara, execução segura e contato direto pelo WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {serviceCards.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-300 via-amber-500 to-emerald-500" />
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-amber-300 shadow-lg shadow-slate-950/10 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-emerald-700">
                        {service.highlight}
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-black tracking-tight text-slate-950">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="fechaduras-eletronicas" className="py-16 md:py-24 bg-white">
          <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-xl shadow-slate-900/5">
                <img
                  src="/mustaff-assets/instalacoes-fechaduras-eletronicas.png"
                  alt="Instalações reais de fechaduras eletrônicas realizadas em ambientes residenciais"
                  className="h-[360px] md:h-[520px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-amber-300">
                <Settings className="h-4 w-4" />
                Especialidade em fechaduras digitais
              </span>
              <h2 className="mt-6 text-3xl md:text-5xl font-black tracking-tight text-slate-950">
                Instalação, configuração, troca e manutenção com padrão profissional.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                A Mustaff Chaveiro 24H atende fechaduras eletrônicas de diferentes marcas e ambientes. O serviço inclui análise da porta, instalação alinhada, cadastro de acessos e orientação de uso para reduzir falhas e aumentar a segurança.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Senha, tag, biometria e aplicativo", "Ajuste de encaixe e acabamento", "Troca de modelos antigos", "Manutenção preventiva e corretiva"].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <p className="text-sm font-bold text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="diferenciais" className="py-16 md:py-24 bg-slate-950 text-white">
          <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-amber-200">
                <ShieldCheck className="h-4 w-4" />
                Segurança em primeiro lugar
              </span>
              <h2 className="mt-6 text-3xl md:text-5xl font-black tracking-tight">
                Por que escolher a Mustaff Chaveiro 24H?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300">
                A proposta é entregar atendimento direto, técnico e confiável para quem precisa resolver um problema de acesso ou elevar o nível de segurança de portas e veículos.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {differentials.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <CheckCircle2 className="h-5 w-5 text-amber-300" />
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="py-16 md:py-24 bg-[#f7f4ee]">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950">
                Atendimento simples, rápido e transparente.
              </h2>
              <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
                Em emergências ou serviços programados, o processo foi pensado para reduzir espera, evitar dúvidas e garantir execução segura.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <div key={step.title} className="relative rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-300 text-2xl font-black text-slate-950">
                    {index + 1}
                  </div>
                  <h3 className="mt-6 text-xl font-black tracking-tight text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="atendimento" className="py-16 md:py-24 bg-white">
          <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950">
                Atendimento residencial, comercial e automotivo.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                A Mustaff concentra sua comunicação nos serviços essenciais de chaveiro 24 horas, removendo chamadas para outros segmentos e direcionando o visitante para uma decisão rápida pelo WhatsApp.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                  <HomeIcon className="h-6 w-6 text-amber-600" />
                  <p className="mt-3 font-black text-slate-950">Residências</p>
                  <p className="mt-1 text-xs text-slate-500">Casas e apartamentos</p>
                </div>
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                  <Building2 className="h-6 w-6 text-amber-600" />
                  <p className="mt-3 font-black text-slate-950">Comércios</p>
                  <p className="mt-1 text-xs text-slate-500">Lojas e escritórios</p>
                </div>
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                  <Car className="h-6 w-6 text-amber-600" />
                  <p className="mt-3 font-black text-slate-950">Veículos</p>
                  <p className="mt-1 text-xs text-slate-500">Nacionais e importados</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/10">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-300">Solicite agora</p>
              <h3 className="mt-4 text-3xl font-black tracking-tight">Precisa de chaveiro 24h?</h3>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Envie sua localização e uma breve descrição do serviço. Se possível, encaminhe uma foto da fechadura, porta, chave ou painel do veículo para acelerar o atendimento.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={MUSTAFF_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-black text-white shadow-lg shadow-emerald-700/20 transition-colors hover:bg-[#128C7E]"
                >
                  <MessageSquare className="h-5 w-5" />
                  WhatsApp emergencial
                </a>
                <a
                  href={`tel:${telLink}`}
                  className="inline-flex flex-1 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-4 font-black text-white transition-colors hover:bg-white/15"
                >
                  <Phone className="h-5 w-5" />
                  Ligar agora
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="depoimentos" className="py-16 md:py-24 bg-[#f7f4ee]">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950">Confiança para resolver o acesso com segurança.</h2>
              <p className="mt-5 text-base text-slate-600 leading-relaxed">
                Depoimentos exemplificam os principais cenários de atendimento: fechaduras eletrônicas, veículos e reforço de segurança.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-slate-600">“{testimonial.text}”</p>
                  <p className="mt-6 font-black text-slate-950">{testimonial.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="relative overflow-hidden bg-slate-950 text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.18),transparent_36%)]" />
          <div className="container relative z-10 max-w-4xl text-center">
            <Wrench className="mx-auto h-10 w-10 text-amber-300" />
            <h2 className="mt-6 text-3xl md:text-6xl font-black tracking-tight">
              Mustaff Chaveiro 24H: solução rápida quando você mais precisa.
            </h2>
            <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed">
              Chame agora para abertura de portas, abertura veicular, fechaduras eletrônicas, troca de fechaduras, chaves codificadas e reforço de segurança.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={MUSTAFF_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-9 py-4 text-base font-black text-white shadow-xl shadow-emerald-700/25 transition-all hover:bg-[#128C7E] hover:-translate-y-0.5"
              >
                <MessageSquare className="h-5 w-5" />
                Chamar emergência 24h
              </a>
              <a
                href={`tel:${telLink}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-9 py-4 text-base font-black text-white transition-all hover:bg-white/15"
              >
                <Phone className="h-5 w-5" />
                {MUSTAFF_PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
