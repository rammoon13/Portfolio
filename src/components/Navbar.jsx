import '../styles/navbar.css'

// Barra de navegación fija con enlaces a cada sección
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Mi Portfolio</h1>
      <ul className="navbar-links">
        {/* Enlaces que realizan scroll a las secciones */}
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
