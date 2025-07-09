import projects from '../data/projects.js'
import ImageSlider from '../components/ImageSlider'
import '../styles/Projects.css'

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Proyectos</h2>
      {projects.map((project) => {
        const paragraphs = project.longDescription
          ? project.longDescription
              .split('\n')
              .filter((line) => line.trim() !== '')
          : []
        const mid = Math.floor(paragraphs.length / 2)

        return (
          <article key={project.id} className="project-block">
            <h3>{project.title}</h3>

            {/* Descripción larga dividida en dos mitades */}
            {project.longDescription ? (
              <div className="project-long-description">
                {paragraphs.slice(0, mid).map((paragraph, index) => (
                  <p key={`p1-${index}`}>{paragraph.trim()}</p>
                ))}
                {project.images && project.images.length > 0 && (
                  <ImageSlider images={project.images} />
                )}
                {paragraphs.slice(mid).map((paragraph, index) => (
                  <p key={`p2-${index}`}>{paragraph.trim()}</p>
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

          {/* Imágenes fuera de la descripción */}
          {project.images &&
            !project.longDescription &&
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