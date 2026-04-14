import { useState, useEffect, useRef } from 'react'

const StatCard = ({ number, label, delay }) => {
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

  return (
    <div 
      ref={ref}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      <p className="text-5xl md:text-7xl font-bold text-orange-500">{number}</p>
      <p className="text-base md:text-lg uppercase tracking-wider text-white">{label}</p>
    </div>
  )
}

export default StatCard
