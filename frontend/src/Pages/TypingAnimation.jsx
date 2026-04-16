import { useState, useEffect } from 'react'

const TypingAnimation = () => {
  const words = ['INTRANETS', 'WEBSITES', 'ONLINE STORES', 'MULTISITES', 'MICROSITES']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1))
          setTypingSpeed(150)
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
          setTypingSpeed(50)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
          setTypingSpeed(50)
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
          setTypingSpeed(150)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, typingSpeed, words])

  return (
    <span className="text-5xl md:text-6xl font-bold text-white">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default TypingAnimation
