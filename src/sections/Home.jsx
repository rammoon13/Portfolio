import { useEffect, useState } from 'react'
import '../styles/home.css'

// Sección principal de bienvenida
function Home() {
  const [showArrow, setShowArrow] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const fullHeight = document.body.offsetHeight

      // Oculta la flecha solo si estás casi al final del scroll
      if (scrollTop + windowHeight >= fullHeight - 100) {
        setShowArrow(false)
      } else {
        setShowArrow(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="home">
      <h1 className="home-title">Ramón Herrera Robles</h1>
      <h2 className="home-subtitle">
        Desarrollador Full Stack · Creador Indie · Apasionado por los desafíos
      </h2>
      <p className="tagline">
        Desde una idea en un cuaderno hasta una app que vive en tus manos — diseño experiencias digitales que dejan huella.
      </p>

      {/* Flecha hacia abajo animada */}
      {showArrow && (
        <div className="scroll-down-arrow" aria-hidden="true">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00ffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="down-icon"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      )}
    </section>
  )
}

export default Home
