import { useState, useEffect } from 'react'
import '../styles/ImageSlider.css'

// Slider de imagenes que muestra la imagen central grande y las adyacentes mas pequenas
function ImageSlider({ images = [] }) {
  if (images.length === 0) return null

  const [index, setIndex] = useState(0)
  const prevIndex = (index - 1 + images.length) % images.length
  const nextIndex = (index + 1) % images.length

  // Avance automatico cada 4 segundos
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
      <button className="slider-btn prev" onClick={handlePrev} aria-label="Anterior">
        ‹
      </button>
      <div className="slider-images">
        <img src={images[prevIndex]} alt="" className="slider-img prev" />
        <img src={images[index]} alt="" className="slider-img active" />
        <img src={images[nextIndex]} alt="" className="slider-img next" />
      </div>
      <button className="slider-btn next" onClick={handleNext} aria-label="Siguiente">
        ›
      </button>
    </div>
  )
}

export default ImageSlider
