import Navbar from './Navbar'
import Footer from './Footer'

// Layout wraps pages with Navbar and Footer
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
