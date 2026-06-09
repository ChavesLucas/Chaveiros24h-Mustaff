import { ShieldCheck, Clock, MapPin, Phone, MessageSquare } from "lucide-react";
import { LABZ_PHONE, LABZ_WHATSAPP_LINK } from "../const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-pink-950 text-white border-t border-pink-900">
      {/* Faixa de Destaque / Garantia */}
      <div className="bg-pink-400 text-pink-950 py-6">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
            <div className="rounded-full bg-pink-950 p-2 text-pink-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-black text-base uppercase leading-none">Profissionais Qualificados</h4>
              <p className="text-xs font-semibold text-pink-900/80 mt-1">Equipe avaliada, de confiança e altamente equipada.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
            <div className="rounded-full bg-pink-950 p-2 text-pink-400">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-black text-base uppercase leading-none">Atendimento Rápido 24h</h4>
              <p className="text-xs font-semibold text-pink-900/80 mt-1">Sempre prontos para te atender de dia ou de noite.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
            <div className="rounded-full bg-pink-950 p-2 text-pink-400">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-black text-base uppercase leading-none">São Paulo e Região</h4>
              <p className="text-xs font-semibold text-pink-900/80 mt-1">Cobertura completa na capital e região metropolitana.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Links e Conteúdo Principal */}
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna 1: Sobre */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-400 font-black text-pink-950">
              <span className="text-xl tracking-tighter">LZ</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white leading-none">
                LABZ<span className="text-pink-400">SERVIÇOS</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-pink-400/80 leading-none mt-0.5">
                24 Horas
              </span>
            </div>
          </div>
          <p className="text-sm text-pink-200 leading-relaxed">
            Serviços residenciais, comerciais e emergenciais com rapidez, confiança e solução imediata. Atendimento 24 horas por dia, 7 dias por semana.
          </p>
        </div>

        {/* Coluna 2: Nossos Serviços / LPs */}
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-black uppercase tracking-wider text-pink-400">
            Nossos Serviços
          </h4>
          <ul className="grid grid-cols-1 gap-2 text-sm text-pink-200">
            <li>
              <a href="/chaveiro-24h" className="hover:text-pink-400 transition-colors duration-150 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-400"></span>
                Chaveiro 24 Horas
              </a>
            </li>
            <li>
              <a href="/eletricista-hidraulica" className="hover:text-pink-400 transition-colors duration-150 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-400"></span>
                Elétrica & Hidráulica
              </a>
            </li>
            <li>
              <a href="/marido-de-aluguel" className="hover:text-pink-400 transition-colors duration-150 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-400"></span>
                Marido de Aluguel
              </a>
            </li>
            <li>
              <a href="/reformas-alvenaria" className="hover:text-pink-400 transition-colors duration-150 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-400"></span>
                Reformas & Alvenaria
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-black uppercase tracking-wider text-pink-400">
            Fale Conosco
          </h4>
          <div className="flex flex-col gap-3 text-sm text-pink-200">
            <a
              href={LABZ_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-150"
            >
              <MessageSquare className="h-4 w-4 text-pink-400" />
              <span>Chamar no WhatsApp</span>
            </a>
            <a
              href={`tel:${LABZ_PHONE.replace(/[^0-8]/g, "")}`}
              className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-150"
            >
              <Phone className="h-4 w-4 text-pink-400" />
              <span>{LABZ_PHONE}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-pink-400" />
              <span>São Paulo e Região Metropolitana</span>
            </div>
          </div>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="bg-pink-950 border-t border-pink-900/60 py-6 text-center text-xs text-blue-300">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} LabzServiços 24 Horas. Todos os direitos reservados.</p>
          <p className="text-[10px] text-blue-400">
            Soluções Rápidas e Seguras para sua Casa ou Empresa.
          </p>
        </div>
      </div>
    </footer>
  );
}
