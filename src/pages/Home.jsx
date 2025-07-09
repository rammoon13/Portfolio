import { Link } from 'react-router-dom'
import '../styles/home.css'

// Home page with welcome message
function Home() {
  return (
    <section className="home">
      <h2>Hola, soy Juan Pérez</h2>
      <p>Desarrollador Frontend</p>
      {/* Button that links to the projects section */}
      <Link className="btn" to="/projects">Ver Proyectos</Link>
    </section>
  )
}

export default Home
