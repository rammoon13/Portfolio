import { useState } from 'react'
import '../styles/navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <h1 className="navbar-title">RH</h1>

      {/* Botón hamburguesa */}
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menú de enlaces */}
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Inicio</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>Sobre mí</a></li>
        <li><a href="#education" onClick={() => setIsOpen(false)}>Estudios</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Proyectos</a></li>
        <li><a href="#experience" onClick={() => setIsOpen(false)}>Experiencia</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
