import experiences from '../data/experiences.js'
import '../styles/experience.css'

// Experience page displaying a timeline of jobs
function Experience() {
  return (
    <section className="experience">
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
