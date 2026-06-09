import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription
} from "./ui/dialog";
import { Button } from "./ui/button";
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Search, 
  ChevronRight, 
  X,
  ExternalLink
} from "lucide-react";
import { NICHES, LABZ_PHONE, LABZ_WHATSAPP_LINK } from "../const";

export default function ServicesBox() {
  const [searchTerm, setSearchState] = useState("");
  const nichesList = Object.values(NICHES);

  // Filtra todos os serviços de todos os nichos com base no termo de busca
  const allFilteredServices = nichesList.flatMap(niche => 
    niche.services.map(service => ({
      ...service,
      nicheTitle: niche.title,
      nicheId: niche.id
    }))
  ).filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.nicheTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-4">
      {/* Box Principal de Gatilho (Estilo Comic-Sticker) */}
      <div className="relative overflow-hidden rounded-3xl border-4 border-pink-950 bg-gradient-to-br from-pink-950 to-pink-900 text-white p-8 md:p-10 shadow-2xl shadow-pink-950/30">
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-400/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left flex-grow">
            <span className="inline-block rounded-full bg-pink-400 px-4 py-1 text-xs font-black uppercase tracking-wider text-pink-950 mb-3 rotate-1">
              Catálogo Completo
            </span>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-none">
              Nossos Serviços <span className="text-pink-400">Prestados</span>
            </h3>
            <p className="text-sm text-pink-100/80 mt-3 max-w-xl leading-relaxed">
              Consulte a lista completa de tudo o que podemos resolver para você na sua casa, condomínio ou empresa. Tudo em um só lugar!
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-pink-400 hover:bg-pink-300 text-pink-950 font-black text-base px-8 py-6 shadow-xl shadow-pink-400/20 hover:scale-105 active:scale-95 transition-all duration-150 border-2 border-white"
                >
                  <Search className="h-5 w-5" />
                  <span>VER TODOS OS SERVIÇOS</span>
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto bg-white border-4 border-pink-950 rounded-3xl p-6 md:p-8 text-pink-950 selection:bg-pink-400 selection:text-pink-950">
                <DialogHeader className="text-left pb-4 border-b border-slate-100">
                  <DialogTitle className="text-2xl md:text-3xl font-black uppercase tracking-tight text-pink-950">
                    Todos os Serviços <span className="text-pink-500">Labz 24h</span>
                  </DialogTitle>
                  <DialogDescription className="text-slate-500 text-sm mt-1">
                    Explore todas as especialidades que atendemos em São Paulo e Região Metropolitana.
                  </DialogDescription>
                </DialogHeader>

                {/* Barra de Busca de Serviços */}
                <div className="my-6 relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                    <Search className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="O que você precisa resolver hoje? (Ex: Chaveiro, Vazamento, Pintura...)"
                    value={searchTerm}
                    onChange={(e) => setSearchState(e.target.value)}
                    className="w-full pl-12 pr-10 py-3 rounded-2xl border-2 border-slate-200 focus:border-pink-950 focus:outline-none font-semibold text-sm transition-all duration-150"
                  />
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchState("")}
                      className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-pink-950"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>

                {/* Lista de Serviços */}
                <div className="space-y-6 max-h-[40vh] overflow-y-auto pr-2 scrollbar-thin">
                  {searchTerm ? (
                    allFilteredServices.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {allFilteredServices.map((service, index) => (
                          <div 
                            key={index}
                            className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 flex flex-col gap-1.5"
                          >
                            <span className="text-[10px] font-black uppercase tracking-wider text-pink-600 bg-pink-400/10 self-start px-2 py-0.5 rounded-full">
                              {service.nicheTitle}
                            </span>
                            <h4 className="font-black text-sm uppercase text-pink-950">{service.title}</h4>
                            <p className="text-xs text-slate-600 leading-relaxed">{service.description}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-slate-500 font-medium">Nenhum serviço encontrado para "{searchTerm}".</p>
                        <p className="text-xs text-slate-400 mt-1">Tente buscar por termos mais genéricos como "porta", "vazamento" ou "pintura".</p>
                      </div>
                    )
                  ) : (
                    <div className="space-y-8">
                      {nichesList.map((niche) => (
                        <div key={niche.id} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-pink-950 flex items-center justify-center p-1.5 border border-white shadow-md">
                              <img src={niche.badgeUrl} alt={niche.title} className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-lg font-black uppercase tracking-tight text-pink-950">
                              {niche.title}
                            </h3>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {niche.services.map((service, idx) => (
                              <div 
                                key={idx}
                                className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-pink-400 transition-all duration-150 flex flex-col gap-1"
                              >
                                <h4 className="font-black text-sm uppercase text-pink-950">{service.title}</h4>
                                <p className="text-xs text-slate-600 leading-relaxed">{service.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Informações de Contato e Endereço */}
                <div className="mt-8 pt-6 border-t-2 border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl">
                  {/* Contato */}
                  <div className="flex flex-col gap-3">
                    <h4 className="font-black uppercase text-xs tracking-wider text-slate-500">Central de Atendimento 24h</h4>
                    <div className="flex flex-col gap-2">
                      <a 
                        href={LABZ_WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-black text-green-600 hover:text-green-700 transition-colors"
                      >
                        <MessageSquare className="h-4 w-4 fill-current" />
                        <span>Chamar no WhatsApp</span>
                      </a>
                      <a 
                        href={`tel:${LABZ_PHONE.replace(/[^0-8]/g, "")}`}
                        className="inline-flex items-center gap-2 text-sm font-black text-pink-950 hover:text-pink-600 transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span>{LABZ_PHONE}</span>
                      </a>
                    </div>
                  </div>

                  {/* Endereço e Cobertura */}
                  <div className="flex flex-col gap-3">
                    <h4 className="font-black uppercase text-xs tracking-wider text-slate-500">Área de Cobertura</h4>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-pink-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-black text-pink-950">São Paulo e Região Metropolitana</p>
                        <p className="text-xs text-slate-500 leading-relaxed mt-0.5">Atendimento rápido em bairros da Capital, ABC, Guarulhos, Osasco e adjacências.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
