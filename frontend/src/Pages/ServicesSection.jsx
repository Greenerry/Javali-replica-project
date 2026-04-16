import { useState, useEffect, useRef } from 'react'

const ServicesSection = () => {

  const services = [
    {
      icon: 'service-icons',
      title: 'Drupal Web Development'
    },
    {
      icon: 'computer',
      title: 'Web Design and UX/UI'
    },
    {
      icon: 'flowsheet',
      title: 'Functional and Strategic Consulting'
    },
    {
      icon: 'settings_alert',
      title: 'Technical Maintenance'
    },
    {
      icon: 'compare_arrows',
      title: 'Platform Update and Migration'
    },
    {
      icon: 'accessibility',
      title: 'Digital accessibility'
    }
  ]

  const getIcon = (iconName) => {
    const icons = {
      cog: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 1.54l4.24 4.24M1 12h6m6 0h6m-13.22 4.22l4.24 4.24m8.44-8.44l4.24 4.24" stroke="currentColor" strokeWidth="2"/>
          <text x="12" y="16" textAnchor="middle" fontSize="8" fill="currentColor">!</text>
        </svg>
      ),
      wrench: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      refresh: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 12a8 8 0 0 1 8-8V2.5L16 6l-4 3.5V8a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6h2a8 8 0 0 1-8 8 8 8 0 0 1-8-8z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      flowchart: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="4" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="14" y="4" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="9" y="14" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M10 10v4m4-4v4m-8-4l4 4m8-4l-4 4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      arrows: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 12H5m0 0l7-7m-7 7l7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      globe: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <ellipse cx="12" cy="12" rx="3" ry="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      palette: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
          <circle cx="8" cy="8" r="2" fill="currentColor"/>
          <circle cx="16" cy="8" r="2" fill="currentColor"/>
          <circle cx="8" cy="16" r="2" fill="currentColor"/>
          <circle cx="16" cy="16" r="2" fill="currentColor"/>
        </svg>
      ),
      accessibility: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 8v7m0 0l-3-3m3 3l3-3M8 21h8M8 17l2-4m4 4l-2-4" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      arrows: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 12H5m0 0l7-7m-7 7l7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      )
    }
    return icons[iconName] || icons.globe
  }

  return (
    <section className="min-h-screen flex">
      {/* Left Column - White Background */}
      <div className="w-full lg:w-1/2 bg-white p-8 lg:p-16 flex flex-col justify-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Serviços que transformam ideias em soluções Drupal
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Combinamos estratégia, design web, desenvolvimento e manutenção para impulsionar o sucesso dos nossos clientes.
        </p>
        <a 
          href="#services" 
          className="border border-gray-900 text-gray-900 px-10 py-4 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-300 mx-auto block uppercase tracking-wider text-sm"
        >
          EXPLORAR SERVIÇOS
        </a>
      </div>

      {/* Right Column - Dark Background */}
      <div className="w-full lg:w-1/2 bg-gray-900 p-8 lg:p-16 flex flex-col justify-center">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-8">
              <img src={`/images/${service.icon}.svg`} alt={service.title} className="w-12 h-12 mr-4" />
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
