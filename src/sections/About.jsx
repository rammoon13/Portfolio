import '../styles/about.css'
import profileImg from '../assets/perfil.png'

// Sección "Sobre mí" con información personal y habilidades organizadas
function About() {
  return (
    <section id="about" className="about">
      <img src={profileImg} alt="Foto de Ramón Herrera Robles" />
      <div>
        <h2 className="fade-slide">Sobre mí</h2>
        <p className="fade-slide">
          Soy Ramón Herrera Robles, desarrollador full stack y creador indie con alma de jugador. Titulado en
          Desarrollo de Aplicaciones Multiplataforma (DAM), llevo años combinando el código con la narrativa,
          los sistemas empresariales con la estética anime, y el entrenamiento físico con la gamificación.
        </p>
        <p className="fade-slide">
          Me apasiona construir experiencias con propósito. Desde gestionar software empresarial con
          <strong> Spring y .NET</strong> hasta diseñar videojuegos en <strong>Unity</strong>, mi misión es siempre
          la misma: crear algo que deje huella. Como exentrenador de baloncesto, sé lo que es liderar, trabajar en equipo
          y sacar lo mejor de cada uno — incluso en las partidas más difíciles.
        </p>
        <p className="fade-slide">
          Busco oportunidades que me reten, me enseñen y me permitan seguir creciendo como profesional y como persona.
          Porque para mí, desarrollar no es un trabajo: es un camino.
        </p>

        <ul className="fade-slide">
          <li><h3>Lenguajes de Programación</h3></li>
          <ul>
            <li>Java · C# · Python · JavaScript · HTML/CSS</li>
          </ul>

          <li><h3>Frameworks y Herramientas</h3></li>
          <ul>
            <li>Spring Boot · .NET · React · Blazor · Unity · SQLite · MySQL</li>
            <li>Git/GitHub · Figma · Android Studio</li>
          </ul>

          <li><h3>Habilidades Técnicas</h3></li>
          <ul>
            <li>Diseño de videojuegos · Arquitectura MVC · APIs REST · UI/UX · Testing</li>
            <li>Full Stack Development · Optimización para móviles y escritorio</li>
          </ul>

          <li><h3>Habilidades Personales</h3></li>
          <ul>
            <li>Liderazgo · Comunicación · Resolución de problemas · Creatividad · Constancia</li>
            <li>Capacidad de adaptación · Mentalidad de crecimiento · Trabajo en equipo</li>
          </ul>
        </ul>
        
      </div>
    </section>
  )
}

export default About
