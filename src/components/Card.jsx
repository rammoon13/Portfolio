import '../styles/card.css'

// Reusable card component for projects and blog posts
function Card({ title, description, children }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Slot for custom content: images, buttons, etc. */}
      {children}
    </article>
  )
}

export default Card
