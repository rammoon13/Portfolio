import Layout from './components/Layout'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import './styles/app.css'
import Education from './sections/Education'

// App muestra todas las secciones en una única página
function App() {
  return (
    <Layout>
      {/* Cada sección se renderiza de forma secuencial */}
      <Home />
      <About />
      <Education />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  )
}

export default App
