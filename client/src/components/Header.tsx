import { MessageSquare, Phone } from "lucide-react";
import { MUSTAFF_BRAND, MUSTAFF_PHONE, MUSTAFF_WHATSAPP_LINK } from "../const";

const navItems = [
  { href: "#emergencia", label: "Abertura emergencial" },
  { href: "#servicos", label: "Serviços" },
  { href: "#fechaduras-eletronicas", label: "Fechaduras eletrônicas" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const telLink = MUSTAFF_PHONE.replace(/[^\d]/g, "");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-5">
        <a href="#" className="flex items-center gap-3" aria-label="Voltar ao início">
          <div className="h-12 w-12 overflow-hidden rounded-2xl border-2 border-amber-300 bg-white shadow-lg shadow-slate-950/10">
            <img
              src="/mustaff-assets/mascote-mustaff-chaveiro-24h.webp"
              alt="Mascote Mustaff Chaveiro 24H"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg md:text-xl font-black tracking-tight text-slate-950">Mustaff</span>
            <span className="mt-1 text-[11px] font-black uppercase tracking-[0.24em] text-amber-700">Chaveiro 24H</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-slate-600 transition-colors hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${telLink}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-black text-slate-800 transition-colors hover:bg-slate-100"
          >
            <Phone className="h-4 w-4 text-amber-700" />
            {MUSTAFF_PHONE}
          </a>
          <a
            href={MUSTAFF_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chamar ${MUSTAFF_BRAND} no WhatsApp`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-700/25 transition-all hover:bg-[#128C7E] hover:-translate-y-0.5"
          >
            <MessageSquare className="h-4 w-4 text-white" />
            <span className="hidden sm:inline">Emergência 24h</span>
            <span className="sm:hidden">Chamar</span>
          </a>
        </div>
      </div>
    </header>
  );
}
