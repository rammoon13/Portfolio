import '../styles/about.css'
import profileImg from '../assets/react.svg'

// Informaci\u00f3n personal y habilidades destacadas
function About() {
  return (
    <section id="about" className="about">
      <img src={profileImg} alt="Mi foto" />
      <div>
        <h2>Sobre mi</h2>
        <p>
          Ramón Herrera Robles, desarrollador full stack con formación en DAM
          y experiencia en software, videojuegos y proyectos web empresariales.
          Apasionado por el anime, el deporte, la creatividad y el crecimiento personal.
        </p>
        <h3>Habilidades</h3>
        <ul>
          <li>Java &amp; Spring</li>
          <li>React y Blazor</li>
          <li>C# y Unity</li>
          <li>Python</li>
          <li>MySQL, Git y diseño UI/UX</li>
        </ul>
      </div>
    </section>
  )
}

export default About
