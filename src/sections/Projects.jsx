import projects from '../data/projects.js'
import ImageSlider from '../components/ImageSlider'
import androidIcon from '../assets/icons/android.svg'
import windowsIcon from '../assets/icons/windows.svg'
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
            <h3 className="project-title">
              {project.icon && (
                <img
                  src={project.icon}
                  alt={`${project.title} icono`}
                  className="project-title-icon"
                />
              )}
              {project.title}
            </h3>
            {/* Si hay descripción larga, dividirla en 2 y meter el slider en medio */}
            {project.longDescription ? (
              <div className="project-long-description">
                {/* Primera mitad del texto */}
                {paragraphs.slice(0, mid).map((paragraph, index) => (
                  <p key={`p1-${index}`}>{paragraph.trim()}</p>
                ))}

                {/* Slider de imágenes embebido */}
                {project.images && project.images.length > 0 && (
                  <ImageSlider images={project.images} />
                )}

                {/* Segunda mitad del texto */}
                {paragraphs.slice(mid).map((paragraph, index) => (
                  <p key={`p2-${index}`}>{paragraph.trim()}</p>
                ))}
              </div>
            ) : (
              <p>{project.description}</p>
            )}

            {/* Tecnologías en badges */}
            <ul className="project-tech">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>

            {/* Imágenes simples si no hay longDescription */}
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

            {/* Vídeo del proyecto, opcional */}
            {project.video && (
              <video controls className="project-video">
                <source src={project.video} type="video/mp4" />
                Tu navegador no soporta el vídeo.
              </video>
            )}
            <div className="project-downloads">
              {project.apk && (
                <a href={project.apk} className="download-button" download>
                  <img src={androidIcon} alt="Android" />
                  Descargar APK
                </a>
              )}
              {project.exe && (
                <a href={project.exe} className="download-button" download>
                  <img src={windowsIcon} alt="Windows" />
                  Descargar EXE
                </a>
              )}
            </div>
          </article>
        )
      })}
    </section>
  )
}
export default Projects