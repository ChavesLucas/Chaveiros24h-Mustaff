import { useState } from "react";
import { Phone, Clock, ShieldCheck, Menu, X } from "lucide-react";
import { LABZ_PHONE, LABZ_WHATSAPP_LINK } from "../const";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-950/20 bg-pink-950/95 text-white backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between py-4">
        <a href="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-pink-400 font-black text-pink-950 shadow-md shadow-pink-400/20 transition-transform duration-200 group-hover:scale-105 active:scale-95">
            <span className="text-xl tracking-tighter">LZ</span>
            <div className="absolute -top-1 -right-1 h-3 w-3 animate-ping rounded-full bg-pink-300 opacity-75"></div>
            <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-pink-400"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-white leading-none group-hover:text-pink-400 transition-colors">
              LABZ<span className="text-pink-400 group-hover:text-white transition-colors">SERVIÇOS</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-pink-400/80 leading-none mt-0.5">
              Chaveiro 24h
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-black uppercase tracking-wider">
          <a href="#servicos" className="text-pink-200 hover:text-pink-400 transition-colors">
            Serviços
          </a>
          <a href="#galeria" className="text-pink-200 hover:text-pink-400 transition-colors">
            Galeria
          </a>
          <a href="#como-funciona" className="text-pink-200 hover:text-pink-400 transition-colors">
            Como Funciona
          </a>
          <a href="#depoimentos" className="text-pink-200 hover:text-pink-400 transition-colors">
            Depoimentos
          </a>
          <a href="#contato" className="text-pink-200 hover:text-pink-400 transition-colors">
            Contato
          </a>
        </nav>

        <div className="hidden lg:flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-pink-200">
            <Clock className="h-4 w-4 text-pink-400" />
            <span className="font-medium">Atendimento 24h</span>
          </div>
          <div className="flex items-center gap-2 text-pink-200">
            <ShieldCheck className="h-4 w-4 text-pink-400" />
            <span className="font-medium">Serviço garantido</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={LABZ_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-pink-400 px-4 py-2 text-sm font-black text-pink-950 shadow-lg shadow-pink-400/10 transition-all duration-200 hover:bg-pink-300 hover:shadow-pink-400/20 active:scale-95"
          >
            <Phone className="h-4 w-4 fill-current" />
            <span>{LABZ_PHONE}</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-pink-900/50 bg-pink-950/98 backdrop-blur-lg animate-in slide-in-from-top duration-200">
          <div className="container py-4 flex flex-col gap-4">
            <a
              href="#servicos"
              className="text-sm font-black uppercase tracking-wider text-pink-100 hover:text-pink-400 py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#galeria"
              className="text-sm font-black uppercase tracking-wider text-pink-100 hover:text-pink-400 py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Galeria
            </a>
            <a
              href="#como-funciona"
              className="text-sm font-black uppercase tracking-wider text-pink-100 hover:text-pink-400 py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a
              href="#depoimentos"
              className="text-sm font-black uppercase tracking-wider text-pink-100 hover:text-pink-400 py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="text-sm font-black uppercase tracking-wider text-pink-100 hover:text-pink-400 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
