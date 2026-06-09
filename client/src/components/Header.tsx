import { useState } from "react";
import { Phone, ShieldCheck, Clock, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { LABZ_PHONE, LABZ_WHATSAPP_LINK, NICHES } from "../const";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-950/20 bg-pink-950/95 text-white backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between py-4">
        
        {/* Logo / Nome da Marca */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer group">
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
              24 Horas
            </span>
          </div>
        </Link>

        {/* Menu de Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
          <Link href="/" className="text-pink-200 hover:text-pink-400 transition-colors">
            Início
          </Link>
          <Link href="/quem-somos" className="text-pink-200 hover:text-pink-400 transition-colors">
            Quem Somos
          </Link>
          
          {/* Dropdown de Serviços */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-pink-200 hover:text-pink-400 transition-colors focus:outline-none py-2">
              <span>Serviços</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Menu Suspenso (Dropdown List) */}
            {dropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-64 rounded-xl border border-pink-900/40 bg-pink-950 p-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="grid gap-1">
                  {Object.values(NICHES).map((niche) => (
                    <Link
                      key={niche.id}
                      href={`/${niche.id}`}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-bold text-pink-100 hover:bg-pink-400 hover:text-pink-950 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-pink-400"></span>
                      <span>{niche.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          
        </nav>

        {/* Informações de Contato Rápidas (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-pink-200">
            <Clock className="h-4 w-4 text-pink-400" />
            <span className="font-medium">Atendimento 24h</span>
          </div>
          <div className="flex items-center gap-2 text-pink-200">
            <ShieldCheck className="h-4 w-4 text-pink-400" />
            <span className="font-medium">Serviço Garantido</span>
          </div>
        </div>

        {/* Botão de Chamada Rápida + Hambúrguer Mobile */}
        <div className="flex items-center gap-3">
          <a
            href={LABZ_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-pink-400 px-4 py-2 text-sm font-black text-pink-950 shadow-lg shadow-pink-400/10 transition-all duration-200 hover:bg-pink-300 hover:shadow-pink-400/20 active:scale-95"
          >
            <Phone className="h-4 w-4 fill-current" />
            <span className="hidden xs:inline">{LABZ_PHONE}</span>
            <span className="xs:hidden">Chamar</span>
          </a>

          {/* Botão Hambúrguer Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu Lateral Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-pink-900/50 bg-pink-950/98 backdrop-blur-lg animate-in slide-in-from-top duration-200">
          <div className="container py-4 flex flex-col gap-4">
            <Link 
              href="/" 
              className="text-sm font-black uppercase tracking-wider text-pink-100 hover:text-pink-400 py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>

            <Link 
              href="/quem-somos" 
              className="text-sm font-black uppercase tracking-wider text-pink-100 hover:text-pink-400 py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quem Somos
            </Link>

            {/* Lista de Serviços Expandida no Mobile */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-black uppercase tracking-widest text-pink-400/80">
                Nossos Serviços
              </span>
              <div className="grid gap-1 pl-2 border-l border-white/10">
                {Object.values(NICHES).map((niche) => (
                  <Link
                    key={niche.id}
                    href={`/${niche.id}`}
                    className="text-xs font-bold text-pink-200 hover:text-pink-400 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {niche.title}
                  </Link>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      )}
    </header>
  );
}
