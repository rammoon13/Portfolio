// Datos de proyectos para el portfolio
// Se puede ampliar fácilmente agregando más objetos a este array

const projects = [
  {
    id: 1,
    title: 'PixelBall Fighter',
    // Descripción extensa del proyecto
    description:
      'Un juego Run & Gun de Dragon Ball con power-ups, enemigos únicos y una estética retro.',
    // Tecnologías empleadas
    technologies: ['Unity', 'C#', 'Pixel Art'],
    // Se pueden añadir varias capturas de pantalla
    images: ['/assets/pixelball_screenshot1.png'],
    // Ruta al vídeo demostrativo (comentado por defecto en el componente)
    video: '/assets/pixelball_demo.mp4',
  },
  {
    id: 2,
    title: 'EZPOS',
    description:
      'Aplicación móvil para asociaciones y eventos. Permite gestionar ventas y productos de forma ágil.',
    technologies: ['Java', 'Android Studio', 'SQLite', 'GitHub'],
    images: ['/vite.svg'],
    // video: '/assets/ezpos_demo.mp4',
  },
  {
    id: 3,
    title: 'Sistema Cine',
    description:
      'Plataforma web para reservas y gestión de butacas en salas de cine. Backend robusto y panel de administración.',
    technologies: ['Blazor', '.NET', 'MySQL'],
    images: ['/vite.svg'],
  },
]

export default projects
