import posts from '../data/blog.js'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import '../styles/blog.css'

// Blog page listing articles
function Blog() {
  return (
    <section className="blog">
      <h2>Blog</h2>
      {posts.map((post) => (
        <Card key={post.id} title={post.title} description={post.summary}>
          {/* Link to read the full post */}
          <Link className="btn" to="#">Leer más</Link>
        </Card>
      ))}
    </section>
  )
}

export default Blog
