import '../styles/home.css'

// Sección principal de bienvenida
function Home() {
  return (
    <section id="home" className="home">
      <h2>Ramón Herrera Robles</h2>
      <p>Desarrollador Full Stack y Creador de Videojuegos</p>
      <p className="tagline">Transformando ideas en experiencias digitales</p>
      {/* Botón que desplaza a la sección de proyectos */}
      <a className="btn" href="#projects">Ver Proyectos</a>
    </section>
  )
}

export default Home
