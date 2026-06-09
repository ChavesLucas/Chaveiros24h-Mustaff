import { MessageSquare, Phone, ShieldCheck, Clock, MapPin, CheckCircle } from "lucide-react";
import { NICHES, LABZ_PHONE, LABZ_WHATSAPP_LINK } from "../const";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CoverageSearch from "../components/CoverageSearch";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ServicesBox from "../components/ServicesBox";

export default function Home() {
  const niche = NICHES["chaveiro-24h"];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-pink-950 font-sans antialiased selection:bg-pink-400 selection:text-pink-950">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-b from-pink-950 to-pink-900 text-white py-16 md:py-24 lg:py-28 border-b-4 border-pink-400">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full bg-pink-400/10 border border-pink-400/30 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-pink-400">
              <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse"></span>
              Chaveiro 24h especializado
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white uppercase">
              {niche.title} <br />
              <span className="text-pink-400">{niche.subtitle}</span>
            </h1>

            <p className="text-base md:text-lg text-pink-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {niche.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-2">
              <a
                href={niche.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-pink-400 px-8 py-4 text-base font-black text-pink-950 shadow-xl shadow-pink-400/20 hover:bg-pink-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
              >
                <MessageSquare className="h-5 w-5 fill-current" />
                <span>CHAMAR NO WHATSAPP</span>
              </a>
              <a
                href={`tel:${LABZ_PHONE.replace(/[^0-8]/g, "")}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-black text-white hover:bg-white/10 hover:border-white/40 transition-all duration-150"
              >
                <Phone className="h-5 w-5" />
                <span>{LABZ_PHONE}</span>
              </a>
            </div>

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

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] md:max-w-[400px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-pink-400/10 blur-3xl animate-pulse"></div>
              <div className="relative rounded-2xl border-4 border-white bg-pink-950 p-4 shadow-2xl shadow-pink-950/40 transition-transform duration-300 hover:scale-105 hover:rotate-1">
                <img
                  src={niche.badgeUrl}
                  alt={niche.title}
                  className="w-full h-auto object-contain rounded-xl"
                  loading="eager"
                />
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-pink-400 border-2 border-white px-4 py-2 text-center shadow-lg shadow-pink-400/20 rotate-3">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-pink-900 leading-none">Solução</span>
                  <span className="block text-sm font-black text-pink-950 leading-none mt-0.5">NA HORA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-pink-950">
              Serviços de chaveiro <span className="text-pink-500">especializados</span>
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Toda a estrutura de um chaveiro moderno: abertura residencial e automotiva, troca de fechaduras, proteção eletrônica e programação de chaves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {niche.services.map((service, index) => (
              <div key={index} className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-200 hover:shadow-lg hover:shadow-pink-950/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-950 text-pink-400 shadow-sm">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-pink-950">{service.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-pink-950">
              Galeria de <span className="text-pink-500">fechaduras e chaves</span>
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Veja exemplos de fechaduras eletrônicas, chaves automotivas e soluções de segurança com instalação profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1581280695847-b7d1bdf0f82d?auto=format&fit=crop&w=900&q=80"
                alt="Fechadura eletrônica instalada"
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-black text-pink-950">Fechadura eletrônica</h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Instalação de fechaduras digitais e biométricas para portões, portas de entrada e condomínios.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1506470444183-8a2d4dbd7a1f?auto=format&fit=crop&w=900&q=80"
                alt="Chave automotiva codificada"
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-black text-pink-950">Chaves automotivas</h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Programação e cópia de chaves de carro, controle remoto e chaves codificadas com garantia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-pink-950">
              Encontre seu serviço <span className="text-pink-500">no modal abaixo</span>
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Selecione o serviço desejado e veja todos os detalhes em um único lugar. Ideal para quem precisa de resposta rápida e sem complicação.
            </p>
          </div>

          <ServicesBox />
        </div>
      </section>

      <section id="como-funciona" className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-pink-950">
              Como funciona o nosso <span className="text-pink-500">atendimento</span>
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Criamos um processo simples e rápido para você ter atendimento imediato e solução sem dor de cabeça.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center gap-4 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-950 font-black text-xl text-pink-400 shadow-md">
                1
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight">Chame no WhatsApp</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mande uma mensagem com fotos ou descrição do problema e receba resposta imediata.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-950 font-black text-xl text-pink-400 shadow-md">
                2
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight">Orçamento na hora</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Receba o valor do serviço com clareza e sem surpresas, diretamente pelo WhatsApp.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-950 font-black text-xl text-pink-400 shadow-md">
                3
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight">Serviço resolvido</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                O profissional chega equipado e resolve seu problema com segurança e rapidez.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-pink-950">
              O que dizem nossos <span className="text-pink-500">clientes</span>
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Avaliações reais de quem já contratou nosso chaveiro 24h em São Paulo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {niche.testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 md:p-8">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-1 text-pink-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="h-3 w-3 rounded-full bg-pink-400"></span>
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-slate-700 italic leading-relaxed">"{testimonial.text}"</p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-2">
                  <span className="font-black text-sm text-pink-950 uppercase">{testimonial.name}</span>
                  <span className="text-xs text-slate-400">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoverageSearch />

      <section id="contato" className="relative overflow-hidden bg-gradient-to-b from-pink-950 to-pink-900 text-white py-16 md:py-24 border-t-4 border-pink-400">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="container relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
            Precisa de um chaveiro <br />
            <span className="text-pink-400">especializado agora?</span>
          </h2>
          <p className="text-base md:text-lg text-pink-200 mt-6 leading-relaxed">
            Nós atendemos residências e veículos com foco em fechaduras eletrônicas, miolos, chaves codificadas e reforço de segurança.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href={niche.whatsappUrl}
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
      <FloatingWhatsApp />
    </div>
  );
}
