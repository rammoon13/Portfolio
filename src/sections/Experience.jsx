import experiences from '../data/experiences.js'
import '../styles/experience.css'

// Cronolog\u00eda de mi experiencia profesional
function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experiencia</h2>
      <ul className="timeline">
        {experiences.map((exp) => (
          <li key={exp.id}>
            <h3>{exp.role} - {exp.company}</h3>
            <span>{exp.period}</span>
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience
