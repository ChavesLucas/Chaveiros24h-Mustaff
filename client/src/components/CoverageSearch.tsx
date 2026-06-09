import { useState, useMemo } from "react";
import { Search, MapPin, CheckCircle, MessageSquare, ShieldAlert, Loader2 } from "lucide-react";
import { LABZ_WHATSAPP_LINK } from "../const";

// Estrutura de dados de bairros de São Paulo organizados por região
const COVERAGE_REGIONS = {
  "Zona Sul": [
    "Santo Amaro", "Vila Mariana", "Itaim Bibi", "Moema", "Morumbi", "Brooklin", 
    "Campo Belo", "Jabaquara", "Ipiranga", "Saúde", "Sacomã", "Grajaú", "Interlagos",
    "Capão Redondo", "Socorro", "Chácara Santo Antônio", "Vila Olimpia"
  ],
  "Zona Oeste": [
    "Pinheiros", "Lapa", "Perdizes", "Butantã", "Barra Funda", "Vila Madalena",
    "Alto de Pinheiros", "Rio Pequeno", "Jaguaré", "Pompéia", "Jardins", "Cerqueira César"
  ],
  "Zona Norte": [
    "Santana", "Tucuruvi", "Casa Verde", "Vila Maria", "Freguesia do Ó", "Limão",
    "Tremembé", "Jaçanã", "Mandaqui", "Cachoeirinha", "Anhembi"
  ],
  "Zona Leste": [
    "Tatuapé", "Mooca", "Itaquera", "Penha", "Vila Prudente", "Belenzinho", 
    "Anália Franco", "Carrão", "Aricanduva", "São Mateus", "Guianases", "São Miguel"
  ],
  "Centro": [
    "Bela Vista", "Consolação", "República", "Sé", "Santa Cecília", "Higienópolis",
    "Liberdade", "Bom Retiro", "Cambuci"
  ],
  "Grande SP": [
    "Guarulhos", "Osasco", "Santo André", "São Bernardo do Campo", "São Caetano do Sul",
    "Diadema", "Barueri", "Alphaville", "Taboão da Serra", "Carapicuíba"
  ]
};

// Cidades cobertas na Grande SP para validação rápida do CEP
const COVERED_CITIES = [
  "são paulo", "guarulhos", "osasco", "santo andré", "são bernardo do campo", 
  "são caetano do sul", "diadema", "barueri", "taboão da serra", "carapicuíba"
];

export default function CoverageSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>("Zona Sul");
  
  // Estados para a busca por CEP
  const [cepInput, setCepInput] = useState("");
  const [cepLoading, setCepLoading] = useState(false);
  const [cepResult, setCepLoadingResult] = useState<{
    success: boolean;
    message: string;
    bairro?: string;
    cidade?: string;
  } | null>(null);

  // Lista plana de todos os bairros para busca rápida
  const allNeighborhoods = useMemo(() => {
    const list: { name: string; region: string }[] = [];
    Object.entries(COVERAGE_REGIONS).forEach(([region, neighborhoods]) => {
      neighborhoods.forEach((name) => {
        list.push({ name, region });
      });
    });
    return list;
  }, []);

  // Filtrar bairros com base no termo de pesquisa
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase();
    return allNeighborhoods.filter((item) =>
      item.name.toLowerCase().includes(term)
    );
  }, [searchTerm, allNeighborhoods]);

  // Função para consultar o CEP em tempo real via ViaCEP
  const handleCepSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCep = cepInput.replace(/\D/g, "");
    
    if (cleanCep.length !== 8) {
      setCepLoadingResult({
        success: false,
        message: "Por favor, digite um CEP válido com 8 números."
      });
      return;
    }

    setCepLoading(true);
    setCepLoadingResult(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setCepLoadingResult({
          success: false,
          message: "CEP não encontrado. Verifique os números e tente novamente."
        });
      } else {
        const localidade = data.localidade.toLowerCase();
        const uf = data.uf.toUpperCase();
        
        // Verificar se a cidade está na lista de cobertura ou se é no estado de SP
        const isCoveredCity = COVERED_CITIES.includes(localidade);
        const isSpState = uf === "SP";

        if (isCoveredCity || isSpState) {
          setCepLoadingResult({
            success: true,
            message: `Atendimento Confirmado! Temos profissionais atuando na região de ${data.bairro || "Centro"} em ${data.localidade} - ${data.uf}.`,
            bairro: data.bairro || "Sua Região",
            cidade: data.localidade
          });
        } else {
          setCepLoadingResult({
            success: false,
            message: `Infelizmente ainda não cobrimos a cidade de ${data.localidade} - ${data.uf}. Nosso atendimento é focado em São Paulo e Região Metropolitana.`
          });
        }
      }
    } catch (error) {
      setCepLoadingResult({
        success: false,
        message: "Erro ao consultar o CEP. Por favor, tente novamente ou fale conosco no WhatsApp."
      });
    } finally {
      setCepLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="container max-w-5xl">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-pink-400/10 border border-pink-400/30 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-pink-600 mb-4">
            <MapPin className="h-3.5 w-3.5" />
            SEO Local & Cobertura Real
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-pink-950">
            Atendemos no seu <span className="text-pink-500">bairro ou CEP?</span>
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Nossa equipe de plantão está distribuída estrategicamente por toda a capital e região metropolitana para chegar até você em minutos. Faça a consulta em tempo real abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coluna Esquerda: Buscador Interativo */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bloco 1: Busca de CEP em Tempo Real */}
            <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm">
              <h3 className="text-lg font-black uppercase tracking-tight text-pink-950 mb-4 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-950 text-[11px] font-bold text-pink-400">CEP</span>
                Consulte pelo seu CEP
              </h3>
              
              <form onSubmit={handleCepSearch} className="flex gap-2.5">
                <input
                  type="text"
                  placeholder="Ex: 01310-100"
                  value={cepInput}
                  onChange={(e) => setCepInput(e.target.value)}
                  className="flex-1 px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-pink-950 placeholder-slate-400 font-semibold focus:border-pink-400 focus:outline-none transition-colors duration-150 text-sm"
                />
                <button
                  type="submit"
                  disabled={cepLoading}
                  className="bg-pink-950 text-pink-400 font-black px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider hover:bg-pink-900 transition-all duration-150 flex items-center gap-2 border border-pink-950"
                >
                  {cepLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Consultar"
                  )}
                </button>
              </form>

              {/* Resultado do CEP */}
              {cepResult && (
                <div className="mt-4">
                  {cepResult.success ? (
                    <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-black text-emerald-950 uppercase text-xs tracking-tight">
                            Atendimento Disponível!
                          </h4>
                          <p className="text-xs text-emerald-800 mt-1">
                            {cepResult.message}
                          </p>
                        </div>
                      </div>
                      <a
                        href={`${LABZ_WHATSAPP_LINK}&text=Olá! Consultei meu CEP e vi que vocês atendem no bairro ${cepResult.bairro || ""} em ${cepResult.cidade}. Preciso de atendimento.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-black text-white shadow-md hover:bg-emerald-700 transition-colors duration-150"
                      >
                        <MessageSquare className="h-3.5 w-3.5 fill-current" />
                        <span>CHAMAR AGORA</span>
                      </a>
                    </div>
                  ) : (
                    <div className="rounded-2xl bg-amber-50 border border-amber-100 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
                      <div className="flex items-start gap-3">
                        <ShieldAlert className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-black text-amber-950 uppercase text-xs tracking-tight">
                            Consulte nossa central
                          </h4>
                          <p className="text-xs text-amber-800 mt-1">
                            {cepResult.message}
                          </p>
                        </div>
                      </div>
                      <a
                        href={`${LABZ_WHATSAPP_LINK}&text=Olá! Gostaria de saber se vocês atendem no CEP ${cepInput}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-black text-white shadow-md hover:bg-amber-700 transition-colors duration-150"
                      >
                        <MessageSquare className="h-3.5 w-3.5 fill-current" />
                        <span>FALAR COM SUPORTE</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bloco 2: Busca por Bairro Tradicional */}
            <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm">
              <h3 className="text-lg font-black uppercase tracking-tight text-pink-950 mb-4 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-950 text-[11px] font-bold text-pink-400">ABC</span>
                Busque pelo nome do bairro
              </h3>
              
              {/* Input de Busca */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Ex: Moema, Tatuapé, Alphaville..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-pink-950 placeholder-slate-400 font-semibold focus:border-pink-400 focus:outline-none transition-colors duration-150 text-sm"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              </div>

              {/* Resultado da Busca */}
              {searchTerm.trim() !== "" ? (
                <div className="space-y-4">
                  {searchResults.length > 0 ? (
                    <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-black text-emerald-950 uppercase text-xs tracking-tight">
                            Atendimento Confirmado!
                          </h4>
                          <p className="text-xs text-emerald-800 mt-1">
                            Temos profissionais de plantão perto de:
                          </p>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {searchResults.slice(0, 2).map((item, idx) => (
                              <span key={idx} className="inline-block bg-emerald-100 text-emerald-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                                {item.name} ({item.region})
                              </span>
                            ))}
                            {searchResults.length > 2 && (
                              <span className="text-[10px] font-bold text-emerald-800 self-center">
                                e mais {searchResults.length - 2}...
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <a
                        href={`${LABZ_WHATSAPP_LINK}&text=Olá! Gostaria de um atendimento para o bairro ${searchResults[0].name}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-black text-white shadow-md hover:bg-emerald-700 transition-colors duration-150"
                      >
                        <MessageSquare className="h-3.5 w-3.5 fill-current" />
                        <span>CHAMAR AGORA</span>
                      </a>
                    </div>
                  ) : (
                    <div className="rounded-2xl bg-amber-50 border border-amber-100 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <ShieldAlert className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-black text-amber-950 uppercase text-xs tracking-tight">
                            Consulte nossa central
                          </h4>
                          <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                            Não encontrou "{searchTerm}"? Nós atendemos praticamente toda a região de São Paulo. Confirme rapidamente com nossa equipe.
                          </p>
                        </div>
                      </div>
                      <a
                        href={`${LABZ_WHATSAPP_LINK}&text=Olá! Vocês atendem no bairro ${searchTerm}?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-black text-white shadow-md hover:bg-amber-700 transition-colors duration-150"
                      >
                        <MessageSquare className="h-3.5 w-3.5 fill-current" />
                        <span>CONSULTAR</span>
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                /* Navegação por Abas de Região */
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {Object.keys(COVERAGE_REGIONS).map((region) => (
                      <button
                        key={region}
                        onClick={() => setSelectedRegion(region)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all duration-150 ${
                          selectedRegion === region
                            ? "bg-pink-950 text-pink-400 shadow-md"
                            : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {region}
                      </button>
                    ))}
                  </div>

                  {/* Grid de Bairros da Região Selecionada */}
                  {selectedRegion && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {COVERAGE_REGIONS[selectedRegion as keyof typeof COVERAGE_REGIONS].map((neighborhood, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 bg-white px-2.5 py-2 rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 hover:border-pink-950/10 hover:shadow-sm transition-all duration-150"
                        >
                          <span className="h-1 w-1 rounded-full bg-pink-400 flex-shrink-0"></span>
                          <span className="truncate">{neighborhood}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>

          {/* Coluna Direita: Caixa de Informação de Confiança */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-pink-950 text-white p-8 rounded-3xl border-l-8 border-pink-400 shadow-lg relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-pink-900/20 blur-2xl"></div>
              
              <h3 className="text-xl font-black uppercase tracking-tight text-pink-400 mb-4">
                Atendimento Rápido Garantido
              </h3>
              
              <ul className="space-y-4 text-sm text-pink-100">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Deslocamento Imediato:</strong> Profissionais estrategicamente posicionados nas principais vias de SP.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Sem Taxa de Visita:</strong> Não cobramos taxa para orçamentos avaliados por fotos no WhatsApp.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Garantia Labz:</strong> Todos os serviços contam com cobertura total e suporte pós-atendimento da Ana.
                  </span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-pink-900 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-pink-400 flex items-center justify-center font-black text-pink-950">
                  24h
                </div>
                <div>
                  <span className="block text-xs font-bold text-pink-400 uppercase tracking-wider leading-none">Plantão de Emergência</span>
                  <span className="block text-xs text-pink-200 mt-1">Sábados, domingos e feriados sem custo adicional.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
