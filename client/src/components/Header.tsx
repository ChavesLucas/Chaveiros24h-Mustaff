import { KeyRound, MessageSquare, Phone } from "lucide-react";
import { MUSTAFF_BRAND, MUSTAFF_PHONE, MUSTAFF_WHATSAPP_LINK } from "../const";

const navItems = [
  { href: "#servicos", label: "Serviços" },
  { href: "#fechaduras-eletronicas", label: "Fechaduras eletrônicas" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const telLink = MUSTAFF_PHONE.replace(/[^\d]/g, "");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-5">
        <a href="#" className="flex items-center gap-3" aria-label="Voltar ao início">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-amber-300 shadow-lg shadow-slate-950/10">
            <KeyRound className="h-6 w-6" />
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
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-slate-950/15 transition-all hover:bg-slate-800 hover:-translate-y-0.5"
          >
            <MessageSquare className="h-4 w-4 text-amber-300" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Chamar</span>
          </a>
        </div>
      </div>
    </header>
  );
}
