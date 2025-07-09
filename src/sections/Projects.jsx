import projects from '../data/projects.js'
import '../styles/Projects.css'

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Proyectos</h2>
      {projects.map((project) => (
        <article key={project.id} className="project-block">
          <h3>{project.title}</h3>

          {/* Descripción larga si existe */}
          {project.longDescription ? (
            <div className="project-long-description">
              {project.longDescription
                .split('\n')
                .filter((line) => line.trim() !== '')
                .map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
            </div>
          ) : (
            <p>{project.description}</p>
          )}

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
          {project.video && (
            <video controls className="project-video">
              <source src={project.video} type="video/mp4" />
              Tu navegador no soporta el vídeo.
            </video>
          )}
        </article>
      ))}
    </section>
  )
}

export default Projects