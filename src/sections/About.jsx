import '../styles/about.css'
import profileImg from '../assets/react.svg'

// Sección "Sobre mí" con información personal y pasiones
function About() {
  return (
    <section id="about" className="about">
      <img src={profileImg} alt="Mi foto" />
      <div>
        <h2>Sobre mí</h2>
        <p>
          Soy Ramón Herrera Robles, desarrollador full stack y creador de
          videojuegos. Titulado en Grado Superior en DAM, siempre busco nuevas
          oportunidades de aprendizaje y superación.
        </p>
        <p>
          Disciplinado y con vocación de líder, he trabajado como entrenador
          de baloncesto durante a\u00f1os, compagin\u00e1ndolo con mi pasión por el
          desarrollo indie, el anime y el deporte. Me motiva aplicar la
          gamificación como herramienta de crecimiento personal.
        </p>
        <h3>Habilidades</h3>
        <ul>
          <li>Java &amp; Spring</li>
          <li>React y Blazor</li>
          <li>C# y Unity</li>
          <li>Python</li>
          <li>MySQL, Git y dise\u00f1o UI/UX</li>
        </ul>
      </div>
    </section>
  )
}

export default About
