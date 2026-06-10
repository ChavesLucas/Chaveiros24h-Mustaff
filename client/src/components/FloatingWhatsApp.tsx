import { MessageSquare } from "lucide-react";
import { MUSTAFF_BRAND, MUSTAFF_WHATSAPP_LINK } from "../const";

export default function FloatingWhatsApp() {
  return (
    <a
      href={MUSTAFF_WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar com ${MUSTAFF_BRAND} pelo WhatsApp`}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-sm font-black text-white shadow-2xl shadow-emerald-700/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#128C7E] active:translate-y-0 md:bottom-7 md:right-7"
    >
      <MessageSquare className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp 24h</span>
    </a>
  );
}
