import { useState, useEffect } from 'react'
import '../styles/ImageSlider.css'

function ImageSlider({ images = [] }) {
  const [index, setIndex] = useState(0)
  const prevIndex = (index - 1 + images.length) % images.length
  const nextIndex = (index + 1) % images.length

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  const handlePrev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setIndex((i) => (i + 1) % images.length)
  }

  return (
    <div className="image-slider">
      <button className="slider-btn prev" onClick={handlePrev} aria-label="Anterior">‹</button>
      
      <div className="slider-images">
        {images.map((src, i) => {
          let className = 'slider-img'

          if (i === index) {
            className += ' active'
          } else if (i === prevIndex) {
            className += ' prev'
          } else if (i === nextIndex) {
            className += ' next'
          } else {
            className += ' hidden'
          }

          return (
            <img key={i} src={src} alt={`Slide ${i}`} className={className} />
          )
        })}
      </div>

      <button className="slider-btn next" onClick={handleNext} aria-label="Siguiente">›</button>
    </div>
  )
}

export default ImageSlider
