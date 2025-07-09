import '../styles/about.css'
import profileImg from '../assets/react.svg'

// About page with personal information
function About() {
  return (
    <section className="about">
      <img src={profileImg} alt="Mi foto" />
      <div>
        <h2>Sobre mí</h2>
        <p>
          Soy un desarrollador apasionado por la tecnología y la creación de
          experiencias web de calidad.
        </p>
      </div>
    </section>
  )
}

export default About
