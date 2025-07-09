import { Link } from 'react-router-dom'
import '../styles/navbar.css'

// Navbar component displayed on all pages
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Mi Portfolio</h1>
      <ul className="navbar-links">
        {/* Links to different sections */}
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Sobre mí</Link></li>
        <li><Link to="/projects">Proyectos</Link></li>
        <li><Link to="/experience">Experiencia</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/extra">Extra</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
