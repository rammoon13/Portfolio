import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'
import instagramIcon from '../assets/instagram.svg'
import '../styles/social.css'

// Componente que muestra los enlaces a mis redes sociales
function SocialLinks() {
  return (
    <div className="social">
      <a href="https://github.com/rammoon13" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/ramon-herrera-robles/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      <a href="https://instagram.com/rammoon13" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" />
      </a>
    </div>
  )
}

export default SocialLinks
