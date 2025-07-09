import '../styles/footer.css'

// Simple footer with social media links
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Mi Portfolio</p>
      <div className="social-links">
        {/* Replace '#' with your social links */}
        <a href="#" aria-label="Twitter">Twitter</a>
        <a href="#" aria-label="LinkedIn">LinkedIn</a>
        <a href="#" aria-label="GitHub">GitHub</a>
      </div>
    </footer>
  )
}

export default Footer
