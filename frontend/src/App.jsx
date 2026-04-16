import { useEffect, useState } from 'react'
import TypingAnimation from './Pages/TypingAnimation'
import ServicesSection from './Pages/ServicesSection'
import ProjectsSection from './Pages/ProjectsSection'
import NewsSection from './Pages/NewsSection'
import Footer from './Pages/Footer'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="absolute top-8 left-0 right-0 z-50 flex justify-between items-center px-16 py-8 pr-48">
        <img src="/images/logo.svg" alt="JAVALI Logo" className="h-16" />
        <button 
          type="button" 
          onClick={() => setMenuOpen(true)} 
          className="lg:hidden text-white text-2xl cursor-pointer hover:opacity-80 transition"
        >
          <span className="text-sm font-bold">Menu</span>
          <span className="text-2xl mt-2">☰</span>
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setMenuOpen(false)}></div>
      )}

      <aside className={`fixed top-0 right-0 h-screen bg-gray-900 z-40 transition-all duration-300 ${menuOpen ? 'w-80' : 'w-20'} flex flex-col`}>
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
              <a href="#" className="block text-white text-lg hover:text-orange-500 transition">Início</a>
              <a href="#" className="block text-white text-lg hover:text-orange-500 transition">Sobre nós</a>
              <a href="#services" className="block text-white text-lg hover:text-orange-500 transition">Serviços</a>
              <a href="#" className="block text-white text-lg hover:text-orange-500 transition">Produtos</a>
              <a href="#projects" className="block text-white text-lg hover:text-orange-500 transition">Projetos</a>
              <a href="#news" className="block text-white text-lg hover:text-orange-500 transition">Notícias</a>
              <a href="#contact" className="block text-white text-lg hover:text-orange-500 transition">Contactos</a>
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
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
          <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300" style={{ opacity: Math.max(0.3, 1 - scrollY / 1000) }}>
            <source src="/images/hero.webm" type="video/webm" />
          </video>
          
          <div className="relative z-10 text-center text-white px-8"> 
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">JAVALI</h1>
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-orange-400">Innovative digital solutions</h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center mt-16">
              <div className="text-center">
                <p className="text-5xl md:text-7xl font-bold text-orange-500">+20</p>
                <p className="text-base md:text-lg uppercase tracking-wider text-white">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <p className="text-5xl md:text-7xl font-bold text-orange-500">+300</p>
                <p className="text-base md:text-lg uppercase tracking-wider text-white">Projetos de Sucesso</p>
              </div>
              <div className="text-center">
                <p className="text-5xl md:text-7xl font-bold text-orange-500">+200</p>
                <p className="text-base md:text-lg uppercase tracking-wider text-white">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* News Section */}
        <NewsSection />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;