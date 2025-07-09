import '../styles/home.css'

// Secci\u00f3n principal de bienvenida
function Home() {
  return (
    <section id="home" className="home">
      <h2>Ram\u00f3n Herrera Robles</h2>
      <p>Desarrollador Full Stack y Creador de Videojuegos</p>
      <p className="tagline">Transformando ideas en experiencias digitales</p>
      {/* Bot\u00f3n que desplaza a la secci\u00f3n de proyectos */}
      <a className="btn" href="#projects">Ver Proyectos</a>
    </section>
  )
}

export default Home
