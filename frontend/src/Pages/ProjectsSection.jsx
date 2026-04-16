import { useState, useEffect } from 'react';
import ClientLogoSlider from './ClientLogoSlider';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(5); // Default to Ministério da Defesa (index 5)
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // For image rotation

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    if (selectedProject?.images && selectedProject.images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [selectedProject]);
  
  const projects = [
    {
      title: "Instituto de Estudos Medievais",
      description: "Modernização das Bases de Dados em Drupal 10",
      category: "Cultura, Arte e Educação",
      images: ["/images/iem_homepage.png"],
      link: "#"
    },
    {
      title: "Culture Collection of Porto / FFUP",
      description: "Modernização digital com Drupal 10",
      category: "Setor Público e Institucional",
      images: ["/images/ccp_project.png"],
      link: "#"
    },
    {
      title: "ISPA",
      description: "Uma parceria digital de longa data em Drupal",
      category: "Cultura, Arte e Educação",
      images: ["/images/ispa_project.png"],
      link: "#"
    },
    {
      title: "Ministério Público",
      description: "Reforça acessibilidade e segurança com Drupal 10",
      category: "Setor Público e Institucional",
      images: ["/images/ministerio_publico_project.png"],
      link: "#"
    },
    {
      title: "Grupo OMI",
      description: "Plataforma Drupal unifica gestão de dados do mercado ibérico",
      category: "Empresas e Indústria",
      images: [
        "/images/omi_project.png",
        "/images/omi_devices.png"
      ],
      link: "#"
    },
    {
      title: "Ministério da Defesa",
      description: "Recrutamento Militar em Drupal promove acessibilidade",
      category: "Setor Público e Institucional",
      images: ["/images/defesa_project.png"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Project List */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Projetos de sucesso
            </h2>
            <ul className="space-y-4">
              {projects.map((project, index) => (
                <li key={index}>
                  <a
                    href="#"
                    onClick={() => setSelectedProject(index)}
                    className={`block p-4 transition-colors duration-200 ${
                      selectedProject === index
                        ? 'bg-orange-600 text-white font-semibold'
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                  >
                    {project.title.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-4 mt-8">
              <a
                href="#projects"
                className="border border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-300"
              >
                Ver mais projetos
              </a>
              <a
                href="#testimonials"
                className="border border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-300"
              >
                Ver testemunhos
              </a>
            </div>
          </div>

          {/* Right Column - Project Display */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg p-8">
              {projects[selectedProject].image && (
                <div className="mb-6">
                  <img 
                    src={projects[selectedProject].image} 
                    alt={projects[selectedProject].title} 
                    className="w-full h-96 object-cover rounded-lg" 
                  />
                </div>
              )}
              <div className="mb-6">
                <span className="text-sm text-orange-600 font-semibold uppercase tracking-wider">
                  {projects[selectedProject].category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {projects[selectedProject].title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                {projects[selectedProject].description}
              </p>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  +
                </div>
                <span className="text-gray-700">Military recruitment in Drupal promotes accessibility</span>
              </div>
              <a 
                href={projects[selectedProject].link}
                className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300"
              >
                Ver projeto &rarr;
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-8 mt-8">
          <a 
            href="#projects"
            className="border border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-300"
          >
            SEE MORE PROJECTS
          </a>
          <a 
            href="#testimonials"
            className="border border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-300"
          >
            SEE TESTIMONIALS
          </a>
        </div>
      </div>
      
      {/* Client Logo Slider */}
      <ClientLogoSlider />
    </section>
  );
};

export default ProjectsSection;
