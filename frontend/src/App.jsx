import { useEffect, useState } from 'react'
import TypingAnimation from './TypingAnimation'
import StatCard from './StatCard'

function App() {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetch('http://drupal-project.ddev.site/jsonapi/node/javali_service')
      .then(res => res.json())
      .then(json => setServices(json.data || []));

    fetch('http://drupal-project.ddev.site/jsonapi/node/portfolio_project')
      .then(res => res.json())
      .then(json => setProjects(json.data || []));
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="absolute top-8 left-0 right-0 z-50 flex justify-between items-center px-16 py-8 pr-48">
        <img src="/images/javalilogo.svg" alt="JAVALI Logo" className="h-16" />
        <button 
          type="button" 
          onClick={() => setMenuOpen(true)} 
          className="lg:hidden text-white text-2xl cursor-pointer hover:opacity-80 transition"
        >
          ☰
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setMenuOpen(false)}></div>
      )}

      <aside className={`fixed top-0 right-0 h-screen bg-gray-900 z-50 transition-all duration-300 ${menuOpen ? 'w-80' : 'w-20'} flex flex-col`}>
        {!menuOpen ? (
          <button 
            type="button" 
            onClick={() => setMenuOpen(true)} 
            className="flex flex-col items-center justify-center h-full text-white hover:text-orange-500 transition"
          >
            <span className="text-sm font-bold">Menu</span>
            <span className="text-2xl mt-2">☰</span>
          </button>
        ) : (
          <>
            <button 
              type="button" 
              onClick={() => setMenuOpen(false)} 
              className="text-orange-500 text-4xl font-bold self-end mb-8 cursor-pointer hover:opacity-80 transition bg-none border-none p-0 pr-4 pt-4"
            >
              ✕
            </button>
            
            <div className="text-white text-sm font-bold text-center">
              <span>en</span>
              <p className="text-xs mt-1">▼</p>
            </div>

            <div className="border-t border-gray-700 my-8 w-full"></div>

            <nav className="flex-1 space-y-6 w-full px-8">
              <a href="#" className="block text-white text-lg hover:text-orange-500 transition">HOME</a>
              <a href="#" className="block text-white text-lg hover:text-orange-500 transition">ABOUT US</a>
              <a href="#services" className="block text-white text-lg hover:text-orange-500 transition">SERVICES</a>
              <a href="#" className="block text-white text-lg hover:text-orange-500 transition">PRODUCTS</a>
              <a href="#portfolio" className="block text-white text-lg hover:text-orange-500 transition">PROJECTS</a>
              <a href="#" className="block text-white text-lg hover:text-orange-500 transition">NEWS</a>
              <a href="#" className="block text-white text-lg hover:text-orange-500 transition">CONTACTS</a>
            </nav>

            <div className="flex flex-row gap-4 text-white text-2xl px-8 pb-8 justify-center">
              <a href="#" className="hover:text-orange-500 transition">🔗</a>
              <a href="#" className="hover:text-orange-500 transition">💼</a>
              <a href="#" className="hover:text-orange-500 transition">f</a>
            </div>
          </>
        )}
      </aside>

      <main className="w-full">
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
          <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300" style={{ opacity: Math.max(0.3, 1 - scrollY / 1000) }}>
            <source src="/images/Luxury Black and Golden dot background 3840x2160 - 4K displays.mp4" type="video/mp4" />
          </video>
          
          <div className="relative z-10 text-center text-white px-8"> 
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">Innovative digital solutions</h1>
            <div className="mb-24">
              <TypingAnimation />
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center mt-16">
              <StatCard number="+20" label="Years of Experience" delay={0} />
              <StatCard number="+300" label="Successful Projects" delay={200} />
              <StatCard number="+200" label="Satisfied Customers" delay={400} />
            </div>
          </div>
        </section>

        <section id="services" className="mb-12 p-8">
          <h2 className="text-2xl font-bold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(service => (
              <div key={service.id} className="border p-4 rounded">
                <h3 className="font-bold text-lg mb-2">{service.attributes.title}</h3>
                <div className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: service.attributes.body?.value }} />
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mb-12 p-8">
          <h2 className="text-2xl font-bold mb-6">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map(project => (
              <div key={project.id} className="border p-4 rounded">
                <h3 className="font-bold text-lg mb-2">{project.attributes.title}</h3>
                <div className="bg-gray-200 h-32 flex items-center justify-center text-sm text-gray-500">Project Image</div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t text-center text-gray-500 p-8">
          <p>&copy; 2026 Javali Project</p>
        </footer>
      </main>
    </div>
  );
}


export default App;