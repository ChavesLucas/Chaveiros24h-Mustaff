import { KeyRound, MapPin, MessageSquare, Phone, ShieldCheck } from "lucide-react";
import { MUSTAFF_BRAND, MUSTAFF_PHONE, MUSTAFF_WHATSAPP_LINK } from "../const";

const footerServices = [
  "Fechaduras eletrônicas",
  "Troca de fechaduras",
  "Abertura de portas",
  "Abertura veicular",
  "Chaves codificadas",
  "Reforço de segurança",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const telLink = MUSTAFF_PHONE.replace(/[^\d]/g, "");

  return (
    <footer className="bg-slate-950 text-white">
      <div className="border-b border-white/10 bg-amber-300 text-slate-950">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-5 py-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6" />
            <p className="text-sm font-black uppercase tracking-wide">Chaveiro 24 horas</p>
          </div>
          <div className="flex items-center gap-3">
            <KeyRound className="h-6 w-6" />
            <p className="text-sm font-black uppercase tracking-wide">Especialista em fechaduras e chaves</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6" />
            <p className="text-sm font-black uppercase tracking-wide">São Paulo e região metropolitana</p>
          </div>
        </div>
      </div>

      <div className="container py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 text-slate-950">
              <KeyRound className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xl font-black leading-none">Mustaff</p>
              <p className="mt-1 text-[11px] font-black uppercase tracking-[0.24em] text-amber-300">Chaveiro 24H</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-300">
            {MUSTAFF_BRAND} oferece atendimento profissional para abertura de portas, abertura veicular, fechaduras eletrônicas, troca de fechaduras, chaves codificadas e reforço de segurança.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-[0.2em] text-amber-300">Serviços</h4>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
            {footerServices.map((service) => (
              <li key={service} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-[0.2em] text-amber-300">Contato imediato</h4>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
            <a href={MUSTAFF_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-amber-300">
              <MessageSquare className="h-4 w-4 text-amber-300" />
              Chamar no WhatsApp
            </a>
            <a href={`tel:${telLink}`} className="flex items-center gap-3 transition-colors hover:text-amber-300">
              <Phone className="h-4 w-4 text-amber-300" />
              {MUSTAFF_PHONE}
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-amber-300" />
              São Paulo e região metropolitana
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {currentYear} {MUSTAFF_BRAND}. Todos os direitos reservados.</p>
          <p>Landing page focada exclusivamente em serviços de chaveiro 24h.</p>
        </div>
      </div>
    </footer>
  );
}
