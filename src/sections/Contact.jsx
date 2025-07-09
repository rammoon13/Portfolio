import '../styles/contact.css'

// Formulario de contacto de ejemplo (solo dise\u00f1o)
function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <p>Ram\u00f3n Herrera Robles &ndash; ramon.herrera@example.com</p>
      <form>
        <label>
          Nombre
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Mensaje
          <textarea name="message" rows="4" />
        </label>
        {/* Bot\u00f3n sin funcionalidad real */}
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Contact
