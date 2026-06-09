import { MessageSquare, Phone, ShieldCheck, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { NICHES, LABZ_PHONE, LABZ_WHATSAPP_LINK } from "../const";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CoverageSearch from "../components/CoverageSearch";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ServicesBox from "../components/ServicesBox";

export default function Home() {
  const nichesList = Object.values(NICHES);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-pink-950 font-sans antialiased selection:bg-pink-400 selection:text-pink-950">
      <Header />

      {/* HERO PRINCIPAL */}
      <section className="relative overflow-hidden bg-gradient-to-b from-pink-950 to-pink-900 text-white py-16 md:py-24 lg:py-28 border-b-4 border-pink-400">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Texto Hero */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full bg-pink-400/10 border border-pink-400/30 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-pink-400">
              <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse"></span>
              Soluções Rápidas e Seguras 24 Horas
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white uppercase">
              O profissional certo <br />
              <span className="text-pink-400">na hora que você precisa</span>
            </h1>

            <p className="text-base md:text-lg text-pink-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Precisa de um chaveiro urgente, encanador, eletricista ou marido de aluguel? A LabzServiços envia um especialista qualificado e equipado para resolver seu problema rápido, sem burocracia e com preço justo.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-2">
              <a
                href={LABZ_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-pink-400 px-8 py-4 text-base font-black text-pink-950 shadow-xl shadow-pink-400/20 hover:bg-pink-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 group"
              >
                <MessageSquare className="h-5 w-5 fill-current" />
                <span>CHAMAR NO WHATSAPP</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href={`tel:${LABZ_PHONE.replace(/[^0-8]/g, "")}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-black text-white hover:bg-white/10 hover:border-white/40 transition-all duration-150"
              >
                <Phone className="h-5 w-5" />
                <span>{LABZ_PHONE}</span>
              </a>
            </div>

            {/* Diferenciais Rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-6 mt-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Clock className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm text-pink-100 font-semibold">Atendimento 24h</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <ShieldCheck className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm text-pink-100 font-semibold">Garantia e Segurança</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <MapPin className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm text-pink-100 font-semibold">São Paulo e Região</span>
              </div>
            </div>
          </div>

          {/* Imagem Hero Geral (Estilo Referência) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] md:max-w-[400px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-pink-400/10 blur-3xl animate-pulse"></div>
              
              <div className="relative rounded-2xl border-4 border-white bg-pink-950 p-4 shadow-2xl shadow-pink-950/40 transition-transform duration-300 hover:scale-105 hover:rotate-1">
                <img
                  src="/manus-storage/04_encanador_badge_b1f81959.webp"
                  alt="Mascote LabzServiços"
                  className="w-full h-auto object-contain rounded-xl"
                  loading="eager"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    if (!t.dataset.fallback) {
                      t.dataset.fallback = "true";
                      t.src = "/manus-storage/01_chaveiro_24h_badge_096977f7.webp";
                    }
                  }}
                />
                
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-pink-400 border-2 border-white px-4 py-2 text-center shadow-lg shadow-pink-400/20 rotate-3">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-pink-900 leading-none">Chame Já</span>
                  <span className="block text-sm font-black text-pink-950 leading-none mt-0.5">24 HORAS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: Nossos Serviços (Grid de LPs/Nichos) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-pink-950">
              Qual serviço você <span className="text-pink-500">precisa hoje?</span>
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Selecione uma das nossas especialidades abaixo para ver os serviços detalhados, tirar dúvidas frequentes e chamar nosso especialista.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {nichesList.map((niche) => (
              <div
                key={niche.id}
                className="group relative flex flex-col sm:flex-row items-center gap-6 rounded-3xl border border-slate-100 bg-slate-50/50 p-6 md:p-8 transition-all duration-300 hover:bg-white hover:border-pink-950/10 hover:shadow-2xl hover:shadow-pink-950/5"
              >
                {/* Badge Ilustrado */}
                <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 flex items-center justify-center bg-pink-950 rounded-2xl border-2 border-white shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1">
                  <img
                    src={niche.badgeUrl}
                    alt={`Badge ${niche.title}`}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                {/* Texto e Link */}
                <div className="flex flex-col gap-3 text-center sm:text-left flex-grow">
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-pink-950 group-hover:text-pink-500 transition-colors duration-150">
                    {niche.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {niche.description}
                  </p>
                  
                  <Link href={`/${niche.id}`}>
                    <span className="inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-black uppercase tracking-wider text-pink-950 hover:text-pink-500 transition-colors duration-150 cursor-pointer mt-2">
                      <span>Ver Serviços e Detalhes</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Box de Serviços Interativo */}
          <ServicesBox />
        </div>
      </section>

      {/* SEÇÃO: Busca Interativa de Bairros (SEO Local) */}
      <CoverageSearch />

      {/* SEÇÃO: Por que escolher a Labz */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-pink-950">
              A melhor escolha para <span className="text-pink-500">sua casa ou empresa</span>
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Garantimos um atendimento de alto padrão com profissionais selecionados, agilidade extrema e transparência em cada orçamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center gap-3 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-950 text-pink-400">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-black uppercase text-sm tracking-wider">Atendimento 24h</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Não importa a hora ou o dia, nossa equipe de plantão está pronta para resolver sua emergência.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-950 text-pink-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-black uppercase text-sm tracking-wider">Garantia de Qualidade</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Todos os serviços contam com garantia e acompanhamento operacional do início ao fim.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-950 text-pink-400">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-black uppercase text-sm tracking-wider">São Paulo e Região</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Ampla cobertura para atender você rapidamente onde quer que esteja na capital ou região metropolitana.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-950 text-pink-400">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="font-black uppercase text-sm tracking-wider">Orçamento na Hora</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Envie fotos ou descreva o problema pelo WhatsApp e receba o orçamento sem taxas ocultas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-pink-950 text-white py-16 md:py-24 border-t-4 border-pink-400">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="container relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
            Resolva seu problema <br />
            <span className="text-pink-400">agora mesmo!</span>
          </h2>
          <p className="text-base md:text-lg text-pink-200 mt-6 leading-relaxed">
            Fale diretamente com nossa central de atendimento pelo WhatsApp. Nossa equipe comercial está de plantão para te responder em minutos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href={LABZ_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-pink-400 px-8 py-4 text-base font-black text-pink-950 shadow-xl shadow-pink-400/20 hover:bg-pink-300 hover:scale-105 active:scale-95 transition-all duration-150"
            >
              <MessageSquare className="h-5 w-5 fill-current" />
              <span>CHAMAR NO WHATSAPP</span>
            </a>
            <a
              href={`tel:${LABZ_PHONE.replace(/[^0-8]/g, "")}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-black text-white hover:bg-white/10 hover:border-white/40 transition-all duration-150"
            >
              <Phone className="h-5 w-5" />
              <span>LIGAR PARA {LABZ_PHONE}</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Botão Flutuante Verde do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
