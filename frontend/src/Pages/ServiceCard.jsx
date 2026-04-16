import { useState, useEffect, useRef } from 'react'

const ServiceCard = ({ icon, title, delay }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const getIcon = (iconName) => {
    const icons = {
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
      cog: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 1.54l4.24 4.24M1 12h6m6 0h6m-13.22 4.22l4.24 4.24m8.44-8.44l4.24 4.24" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      wrench: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      )
    }
    return icons[iconName] || icons.globe
  }

  return (
    <div 
      ref={ref}
      className={`flex items-center space-x-4 text-white group cursor-pointer transform transition-all duration-1000 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
        {getIcon(icon)}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  )
}

export default ServiceCard
