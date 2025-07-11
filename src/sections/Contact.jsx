import SocialLinks from '../components/SocialLinks'
import '../styles/contact.css'

// Secci\u00f3n de contacto con enlaces directos a redes sociales
function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="fade-slide">Contacto</h2>
      <p className="fade-slide">
        Puedes escribirme a{' '}
        <a href="mailto:herreraroblesramon@gmail.com">herreraroblesramon@gmail.com</a>
      </p>
      <SocialLinks />
    </section>
  )
}

export default Contact
