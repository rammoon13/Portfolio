import SocialLinks from '../components/SocialLinks'
import '../styles/contact.css'

// Secci\u00f3n de contacto con enlaces directos a redes sociales
function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <p>
        Puedes escribirme a{' '}
        <a href="mailto:ramon.herrera@example.com">ramon.herrera@example.com</a>
      </p>
      <SocialLinks />
    </section>
  )
}

export default Contact
