import { MessageSquare } from "lucide-react";
import { LABZ_WHATSAPP_LINK } from "../const";

export default function FloatingWhatsApp() {
  return (
    <a
      href={LABZ_WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-600/30 transition-all duration-300 hover:bg-[#128C7E] hover:scale-110 hover:-rotate-6 active:scale-95 group animate-bounce"
      style={{ animationDuration: "3s" }}
    >
      {/* Halo de pulsação suave */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75"></span>
      
      {/* Ícone do WhatsApp */}
      <MessageSquare className="h-7 w-7 fill-current relative z-10" />

      {/* Tooltip discreto no hover */}
      <span className="absolute right-16 bg-pink-950 text-white text-xs font-black px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none uppercase tracking-wider border border-white/10">
        Atendimento 24h Online
      </span>
    </a>
  );
}
