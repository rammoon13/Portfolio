import '../styles/home.css'

// Secci\u00f3n principal de bienvenida
function Home() {
  return (
    <section id="home" className="home">
      <h2>Hola, soy Ram\u00f3n Herrera Robles</h2>
      <p>Desarrollador Full Stack</p>
      {/* Bot\u00f3n que desplaza a la secci\u00f3n de proyectos */}
      <a className="btn" href="#projects">Ver Proyectos</a>
    </section>
  )
}

export default Home
