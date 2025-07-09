import '../styles/contact.css'

// Contact page with a basic form (design only)
function Contact() {
  return (
    <section className="contact">
      <h2>Contacto</h2>
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
        {/* Submit button does not do anything yet */}
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Contact
