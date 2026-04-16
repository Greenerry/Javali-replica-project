import { useState, useEffect } from 'react';

const ClientLogoSlider = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  
  const clientLogos = [
    { name: "BANCO DE PORTUGAL", logo: "/images/banco_portugal.png" },
    { name: "bestdeal", logo: "/images/best_deal.png" },
    { name: "Cascais Smart Pole", logo: "/images/cascais_smartpole.png" },
    { name: "CASCAIS", logo: "/images/cascais.png" },
    { name: "Direção-Geral de Energia e Geologia", logo: "/images/dgeg.png" },
    { name: "NOVA SCHOOL OF SCIENCE & TECHNOLOGY", logo: "/images/nova.png" },
    { name: "Givaudan", logo: "/images/givaudan.png" },
    { name: "Grupo Manuel Champalimaud", logo: "/images/champalimaud.png" },
    { name: "Ilha de Moçambique", logo: "/images/ilhamocambique.png" },
    { name: "Politécnico de Lisboa", logo: "/images/politecnico_lisboa.png" },
    { name: "ISCSP", logo: "/images/iscsp.png" },
    { name: "ISCTE", logo: "/images/iscte.png" },
    { name: "ISPA", logo: "/images/ispa.png" },
    { name: "MIBGAS", logo: "/images/mibgas.png" },
    { name: "Ministério da Defesa", logo: "/images/dgrdn.png" },
    { name: "Ministério Público", logo: "/images/ministerio_publico.png" },
    { name: "Parvalorem", logo: "/images/parvalorem.png" },
    { name: "SATA", logo: "/images/sata.png" },
    { name: "Sumol Compal", logo: "/images/sumol.png" },
    { name: "Turismo de Portugal", logo: "/images/turismo_portugal.png" },
    { name: "UCCLA", logo: "/images/uccla.png" },
    { name: "Uninova", logo: "/images/uninova.png" },
    { name: "Viagem pelo Clima", logo: "/images/viagem.png" },
    { name: "Instituto de Estudos Medievais", logo: "/images/iem.png" },
    { name: "A3ES", logo: "/images/a3es.png" },
    { name: "AMOITA", logo: "/images/amoita.png" },
    { name: "APA", logo: "/images/apa.png" },
    { name: "APDPO", logo: "/images/apdpo.png" }
  ];

  // Auto-scroll logos every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % clientLogos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleLogos = () => {
    const visibleCount = 8; // Show 8 logos at a time
    const startIndex = currentLogoIndex;
    const endIndex = startIndex + visibleCount;
    return clientLogos.slice(startIndex, endIndex).concat(
      clientLogos.slice(0, startIndex) // Wrap around to beginning
    );
  };

  return (
    <div className="w-full bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-6 text-center">
          Trusted by leading organizations
        </h3>
        
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            {getVisibleLogos().map((client, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogoSlider;
