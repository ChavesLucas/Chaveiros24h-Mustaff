import { useState, useEffect } from "react";
import { MessageSquare, Phone, ShieldCheck, Clock, CheckCircle, HelpCircle, ArrowRight, Star } from "lucide-react";
import { NicheData, NICHES, LABZ_PHONE } from "../const";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CoverageSearch from "../components/CoverageSearch";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

interface NicheLandingPageProps {
  nicheId: keyof typeof NICHES;
}

export default function NicheLandingPage({ nicheId }: NicheLandingPageProps) {
  const data: NicheData = NICHES[nicheId];
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Mapeamento de imagens reais do Unsplash de acordo com o nicho para dar um toque super profissional
  const getNicheRealImage = (id: string) => {
    switch (id) {
      case "chaveiro-24h":
        return "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80"; // Chaves e fechaduras
      case "eletricista-hidraulica":
        return "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"; // Eletricista trabalhando
      case "encanador-24h":
        return "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80"; // Encanador / Tubulações
      case "assistencia-veicular":
        return "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80"; // Guincho / Carro socorro
      case "marido-de-aluguel":
        return "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"; // Pequenos reparos / Furadeira
      case "reformas-alvenaria":
        return "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"; // Construção / Reforma
      default:
        return "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80";
    }
  };

  // Atualizar título e meta description dinamicamente
  useEffect(() => {
    if (data) {
      document.title = `${data.title} | LabzServiços 24h`;
      
      // Atualizar meta description se existir
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", data.metaDescription);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = data.metaDescription;
        document.head.appendChild(meta);
      }
    }
  }, [data]);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-pink-950 text-white p-4">
        <h1 className="text-2xl font-black mb-4">Nicho não encontrado</h1>
        <a href="/" className="rounded-full bg-pink-400 px-6 py-2 text-pink-950 font-bold">Voltar para Home</a>
      </div>
    );
  }

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-pink-950 font-sans antialiased selection:bg-pink-400 selection:text-pink-950">
      <Header />

      {/* HERO SECTION: Estilo Dynamic Comic-Sticker */}
      <section className="relative overflow-hidden bg-gradient-to-b from-pink-950 to-pink-900 text-white py-12 md:py-20 lg:py-24 border-b-4 border-pink-400">
        {/* Padrão geométrico de fundo para textura */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Coluna de Texto */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full bg-pink-400/10 border border-pink-400/30 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-pink-400">
              <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse"></span>
              Atendimento 24 Horas em São Paulo
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white uppercase">
              {data.title} <br className="hidden sm:inline" />
              <span className="text-pink-400">{data.subtitle}</span>
            </h1>

            <p className="text-base md:text-lg text-pink-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {data.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-2">
              <a
                href={data.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-pink-400 px-8 py-4 text-base font-black text-pink-950 shadow-xl shadow-pink-400/20 transition-all duration-200 hover:bg-pink-300 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <MessageSquare className="h-5 w-5 fill-current" />
                <span>CHAMAR NO WHATSAPP</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href={`tel:${LABZ_PHONE.replace(/[^0-8]/g, "")}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-black text-white hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                <Phone className="h-5 w-5" />
                <span>{LABZ_PHONE}</span>
              </a>
            </div>

            {/* Selos de Confiança Rápidos */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 mt-4 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start gap-1">
                <span className="text-pink-400 font-black text-lg md:text-xl leading-none">24h</span>
                <span className="text-xs text-pink-200 font-semibold uppercase tracking-wider">Atendimento</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1 border-x border-white/10 px-4">
                <span className="text-pink-400 font-black text-lg md:text-xl leading-none">Rápido</span>
                <span className="text-xs text-pink-200 font-semibold uppercase tracking-wider">Chegada</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1">
                <span className="text-pink-400 font-black text-lg md:text-xl leading-none">100%</span>
                <span className="text-xs text-pink-200 font-semibold uppercase tracking-wider">Garantido</span>
              </div>
            </div>
          </div>

          {/* Coluna da Imagem/Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] md:max-w-[400px] aspect-square flex items-center justify-center">
              {/* Halos de brilho atrás do badge */}
              <div className="absolute inset-0 rounded-full bg-pink-400/10 blur-3xl animate-pulse"></div>
              <div className="absolute w-4/5 h-4/5 rounded-full bg-blue-600/15 blur-2xl"></div>

              {/* Badge Ilustrado Estilo Sticker */}
              <div className="relative rounded-2xl border-4 border-white bg-pink-950 p-4 shadow-2xl shadow-pink-950/40 transition-transform duration-300 hover:scale-105 hover:rotate-1">
                <img
                  src={data.badgeUrl}
                  alt={`Badge ${data.title}`}
                  className="w-full h-auto object-contain rounded-xl"
                  loading="eager"
                />
                
                {/* Selo flutuante de emergência */}
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-pink-400 border-2 border-white px-4 py-2 text-center shadow-lg shadow-pink-400/20 rotate-3">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-pink-900 leading-none">Solução</span>
                  <span className="block text-sm font-black text-pink-950 leading-none mt-0.5">NA HORA!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: Por que a Labz (Diferenciais Profissionais) */}
      <section className="py-12 bg-pink-950 text-white border-b border-white/10">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex gap-4 items-center p-4 bg-white/5 rounded-xl border border-white/10">
            <Clock className="h-10 w-10 text-pink-400 flex-shrink-0" />
            <div>
              <h4 className="font-black text-sm uppercase tracking-tight">Atendimento 24h</h4>
              <p className="text-xs text-pink-200">De dia, de noite ou de madrugada.</p>
            </div>
          </div>
          <div className="flex gap-4 items-center p-4 bg-white/5 rounded-xl border border-white/10">
            <ShieldCheck className="h-10 w-10 text-pink-400 flex-shrink-0" />
            <div>
              <h4 className="font-black text-sm uppercase tracking-tight">Garantia e Segurança</h4>
              <p className="text-xs text-pink-200">Profissionais qualificados e confiáveis.</p>
            </div>
          </div>
          <div className="flex gap-4 items-center p-4 bg-white/5 rounded-xl border border-white/10">
            <CheckCircle className="h-10 w-10 text-pink-400 flex-shrink-0" />
            <div>
              <h4 className="font-black text-sm uppercase tracking-tight">Preço Justo</h4>
              <p className="text-xs text-pink-200">Orçamento sem surpresas ou taxas extras.</p>
            </div>
          </div>
          <div className="flex gap-4 items-center p-4 bg-white/5 rounded-xl border border-white/10">
            <MessageSquare className="h-10 w-10 text-pink-400 flex-shrink-0" />
            <div>
              <h4 className="font-black text-sm uppercase tracking-tight">Orçamento Rápido</h4>
              <p className="text-xs text-pink-200">Preço na hora pelo WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: Serviços e Especialidades */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Coluna da Esquerda: Grid de Serviços */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-pink-950">
                  Especialidades do nosso <span className="text-pink-500">{data.title}</span>
                </h2>
                <p className="text-base text-slate-600 mt-4 leading-relaxed">
                  Confira os serviços mais solicitados. Nossa equipe está totalmente equipada e pronta para resolver seu problema com agilidade, capricho e limpeza.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.services.map((service, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all duration-200 hover:bg-white hover:border-pink-950/10 hover:shadow-xl hover:shadow-pink-950/5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-950 text-pink-400 shadow-sm">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-black text-pink-950 uppercase leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 mt-1.5 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna da Direita: Imagem Real Temática + CTA Card */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
              {/* Imagem Real do Unsplash com overlay profissional */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border-4 border-white">
                <img
                  src={getNicheRealImage(data.id)}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-950 via-pink-950/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block rounded bg-pink-400 text-pink-950 text-[10px] font-black uppercase px-2 py-0.5 mb-1">
                    Mão de Obra Profissional
                  </span>
                  <p className="text-xs text-pink-100 font-medium">Atendimento residencial e comercial em São Paulo.</p>
                </div>
              </div>

              {/* Card de Conversão Lateral */}
              <div className="rounded-2xl bg-pink-950 text-white p-6 border-l-4 border-pink-400 shadow-xl">
                <h3 className="text-lg font-black uppercase tracking-tight text-white">
                  Precisa de Orçamento Sem Compromisso?
                </h3>
                <p className="text-xs text-pink-200 mt-2 leading-relaxed">
                  Envie fotos do problema ou nos conte o que você precisa instalar. Nossa equipe responde imediatamente com os valores na hora.
                </p>
                <div className="flex flex-col gap-3 mt-4">
                  <a
                    href={data.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-400 px-6 py-3 text-xs font-black text-pink-950 shadow-md hover:bg-pink-300 transition-colors"
                  >
                    <MessageSquare className="h-4 w-4 fill-current" />
                    <span>FALAR COM PLANTÃO WHATSAPP</span>
                  </a>
                  <a
                    href={`tel:${LABZ_PHONE.replace(/[^0-8]/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-black text-white hover:bg-white/10 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>LIGAR: {LABZ_PHONE}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO: Como Funciona (Fluxo Sem Burocracia) */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-pink-950">
              Como funciona o nosso <span className="text-pink-500">atendimento</span>
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Criamos um processo extremamente simples, rápido e transparente para você resolver sua emergência ou manutenção sem complicação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Passo 1 */}
            <div className="flex flex-col items-center text-center gap-4 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-950 font-black text-xl text-pink-400 shadow-md">
                1
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight">Chame no WhatsApp</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mande uma mensagem e conte qual é o seu problema ou o que precisa instalar. Atendemos 24 horas por dia.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="flex flex-col items-center text-center gap-4 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-950 font-black text-xl text-pink-400 shadow-md">
                2
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight">Orçamento na hora</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Avaliamos o seu caso e passamos o valor do orçamento de forma clara, sem compromisso e sem taxas surpresas.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="flex flex-col items-center text-center gap-4 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-950 font-black text-xl text-pink-400 shadow-md">
                3
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight">Resolvido rapidinho</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nosso profissional qualificado vai até o local totalmente equipado e realiza o serviço com rapidez e garantia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: Depoimentos Reais dos Clientes */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-pink-950">
              O que dizem os <span className="text-pink-500">nossos clientes</span>
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              A satisfação de quem já contratou nossos serviços de {data.title} em São Paulo é o nosso maior orgulho. Veja avaliações reais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {data.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 md:p-8"
              >
                <div className="flex flex-col gap-3">
                  {/* Estrelas */}
                  <div className="flex gap-1 text-pink-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-slate-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
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

      {/* SEÇÃO: Busca Interativa de Bairros (SEO Local) */}
      <CoverageSearch />

      {/* SEÇÃO: FAQ (Perguntas Frequentes) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-pink-950">
              Dúvidas <span className="text-pink-500">Frequentes</span>
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Tem alguma pergunta sobre como trabalhamos? Veja as respostas para as dúvidas mais comuns dos nossos clientes.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {data.faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-black text-base md:text-lg uppercase tracking-tight text-pink-950 hover:bg-slate-100/80 transition-colors duration-150"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-pink-500 flex-shrink-0" />
                    {faq.question}
                  </span>
                  <span className="text-xl text-slate-400 ml-4">
                    {activeFaq === index ? "−" : "+"}
                  </span>
                </button>
                
                {activeFaq === index && (
                  <div className="p-6 pt-0 border-t border-slate-100 bg-white text-sm md:text-base text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO: CTA Final de Conversão */}
      <section className="relative overflow-hidden bg-pink-950 text-white py-16 md:py-24 border-t-4 border-pink-400">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="container relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
            Precisa de ajuda com <br />
            <span className="text-pink-400">{data.title}?</span>
          </h2>
          <p className="text-base md:text-lg text-pink-200 mt-6 leading-relaxed">
            Não espere o problema piorar. Chame a LabzServiços 24h agora mesmo e tenha um profissional qualificado resolvendo tudo com segurança e preço justo.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href={data.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-pink-400 px-8 py-4 text-base font-black text-pink-950 shadow-xl shadow-pink-400/20 hover:bg-pink-300 hover:scale-105 active:scale-95 transition-all duration-150"
            >
              <MessageSquare className="h-5 w-5 fill-current" />
              <span>FALAR NO WHATSAPP AGORA</span>
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
