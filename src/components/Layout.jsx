import Navbar from './Navbar'
import Footer from './Footer'

// Layout que envuelve las secciones con la cabecera y el pie de página
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
