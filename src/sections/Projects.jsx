import projects from '../data/projects.js'
import '../styles/projects.css'

// Sección que muestra cada proyecto como un bloque amplio
function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      {projects.map((project) => (
        <article key={project.id} className="project-item">
          <div className="project-media">
            <img src={project.image} alt={project.name} />
          </div>
          <div className="project-info">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="tech">Tecnologías: {project.technologies}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Projects
