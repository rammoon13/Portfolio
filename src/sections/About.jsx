import '../styles/about.css'
import profileImg from '../assets/react.svg'

// Secci\u00f3n "Sobre m\u00ed" con informaci\u00f3n personal y pasiones
function About() {
  return (
    <section id="about" className="about">
      <img src={profileImg} alt="Mi foto" />
      <div>
        <h2>Sobre m\u00ed</h2>
        <p>
          Soy Ram\u00f3n Herrera Robles, desarrollador full stack y creador de
          videojuegos. Titulado en Grado Superior en DAM, siempre busco nuevas
          oportunidades de aprendizaje y superaci\u00f3n.
        </p>
        <p>
          Disciplinado y con vocaci\u00f3n de l\u00edder, he trabajado como entrenador
          de baloncesto durante a\u00f1os, compagin\u00e1ndolo con mi pasi\u00f3n por el
          desarrollo indie, el anime y el deporte. Me motiva aplicar la
          gamificaci\u00f3n como herramienta de crecimiento personal.
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
