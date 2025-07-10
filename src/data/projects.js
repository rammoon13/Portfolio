// Datos de proyectos para el portfolio
// Se puede ampliar fácilmente agregando más objetos a este array

const projects = [
  {
    id: 1,
    title: 'PixelBall Fighter',
    icon: '/assets/pixelball_icon.png',
    description: 'Un juego Run & Gun de Dragon Ball con jugabilidad, enemigos y animaciones únicas y una estética retro.',
    longDescription: `
      PixelBall Fighter es un videojuego tipo Run & Gun con desplazamiento lateral, inspirado en el universo de Dragon Ball Z. El jugador recorre un nivel lleno de enemigos y obstáculos mientras persigue a Freezer, hasta llegar a una batalla final en la que el villano se transforma y sube la dificultad. Todo está desarrollado en Unity, y el juego es compatible con teclado, mando y móviles.

El proyecto está dividido en cinco escenas bien organizadas: una pantalla de inicio, un menú de niveles, el nivel jugable, pantallas de carga adaptadas al progreso y resultados dinámicos (victoria o derrota) que se superponen al nivel. Aunque solo hay un nivel disponible, está diseñado para ser completamente rejugable y visualmente sólido.

El jefe final, Freezer, se comporta de forma progresiva: primero huye y dispara desde la distancia, y tras recibir suficiente daño, se transforma, gana vida y ataca con más frecuencia. Esta transición no solo aumenta la dificultad, sino que también eleva el ritmo narrativo.

La parte técnica destaca por su organización modular: los scripts reutilizan lógica común gracias a herencia, los disparos son prefabs con colisiones personalizadas (que distinguen entre aliados y enemigos), y el comportamiento de enemigos y jugadores está cuidadosamente estructurado para garantizar fluidez y escalabilidad.

Visualmente, el juego utiliza sprites pixel art modificados a mano: eliminé fondos, mejoré calidad y animé acciones como correr, disparar, saltar o morir, en ambas direcciones. Los enemigos tienen sus propias animaciones y efectos visuales cuando reciben daño (como un breve parpadeo en rojo). El sistema de sonido usa efectos y voces del universo Dragon Ball, gestionados con AudioSource.

Además de las mecánicas básicas, el juego incluye una pantalla de pausa, sistema de vidas, barra de salud del jefe visible solo cuando estás en combate y, sobre todo, una jugabilidad desafiante pero justa. De hecho, más de 200 personas lo han probado y ninguna lo ha superado en menos de 10 intentos.

En un futuro me gustaría añadir monedas, una tienda interna, conexión a base de datos y más personajes desbloqueables. Pero incluso en su estado actual, PixelBall Fighter demuestra lo que soy capaz de hacer combinando diseño, programación y pasión por los videojuegos.
    `,
    technologies: ['Unity', 'C#', 'Pixel Art'],
    images: [
      '/assets/pixelball_screenshot1.png',
      '/assets/pixelball_screenshot2.png',
      '/assets/pixelball_screenshot3.png',
      '/assets/pixelball_screenshot4.png',
      '/assets/pixelball_screenshot5.png',
      '/assets/pixelball_screenshot6.png',
      '/assets/pixelball_screenshot7.png',
    ],
    video: '/assets/pixelball_demo.mp4', // Comentado por defecto en el componente
    apk: '/downloads/PixelBallFighter.apk',
    exe: '/downloads/PixelBallFighter.exe',
  },
  {
    id: 2,
    title: 'EZPOS',
    icon: '/assets/pixelball_icon.png',
    description:
      'Aplicación móvil para asociaciones y eventos. Permite gestionar ventas y productos de forma ágil.',
    technologies: ['Java', 'Android Studio', 'SQLite', 'GitHub'],
    images: ['/vite.svg'],
    // video: '/assets/ezpos_demo.mp4',
  },
  {
    id: 3,
    title: 'Sistema Cine',
    icon: '/assets/pixelball_icon.png',
    description:
      'Plataforma web para reservas y gestión de butacas en salas de cine. Backend robusto y panel de administración.',
    technologies: ['Blazor', '.NET', 'MySQL'],
    images: ['/vite.svg'],
  },
]

export default projects
