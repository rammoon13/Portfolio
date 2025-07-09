import hobbies from '../data/hobbies.js'
import '../styles/extra.css'

// Extra page for personal hobbies
function Extra() {
  return (
    <section className="extra">
      <h2>Universo Personal</h2>
      <div className="hobby-grid">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="hobby-item">
            <img src={hobby.image} alt={hobby.name} />
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Extra
