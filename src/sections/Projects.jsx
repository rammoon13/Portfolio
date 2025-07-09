import projects from '../data/projects.js'
import '../styles/Projects.css'

// Componente Projects
// Muestra cada proyecto como un bloque grande con imágenes, tecnologías y descripción
// Se puede ampliar fácilmente añadiendo más objetos en ../data/projects.js
function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Proyectos</h2>
      {projects.map((project) => (
        <article key={project.id} className="project-block">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {/* Tecnologías representadas como badges */}
          <ul className="project-tech">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          {/* Imágenes del proyecto */}
          {project.images &&
            project.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${project.title} captura ${idx + 1}`}
                className="project-image"
              />
            ))}
          {/*
          {project.video && (
            <video controls className="project-video">
              <source src={project.video} type="video/mp4" />
            </video>
          )}
          */}
        </article>
      ))}
    </section>
  )
}

export default Projects
