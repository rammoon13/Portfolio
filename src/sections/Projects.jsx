import projects from '../data/projects.js'
import Card from '../components/Card'
import '../styles/projects.css'

// Lista de proyectos destacados
function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <Card key={project.id} title={project.name} description={project.description}>
            {/* Imagen de ejemplo */}
            <img src={project.image} alt={project.name} />
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects
