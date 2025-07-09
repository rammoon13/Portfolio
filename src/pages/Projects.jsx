import projects from '../data/projects.js'
import Card from '../components/Card'
import '../styles/projects.css'

// Projects page showing a list of Project cards
function Projects() {
  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <Card key={project.id} title={project.name} description={project.description}>
            {/* Example image usage */}
            <img src={project.image} alt={project.name} />
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects
