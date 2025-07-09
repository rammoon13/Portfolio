// Datos de proyectos para el portfolio
// Se puede ampliar fácilmente agregando más objetos a este array

const projects = [
  {
    id: 1,
    title: 'PixelBall Fighter',
    description: 'Un juego Run & Gun de Dragon Ball con power-ups, enemigos únicos y una estética retro.',
    longDescription: `
      PixelBall Fighter es un videojuego tipo Run & Gun con scroll lateral, inspirado en Dragon Ball Z. El jugador persigue a Freezer mientras combate enemigos y esquiva obstáculos, hasta llegar a una batalla final donde el villano se transforma, aumentando la dificultad. Está desarrollado en Unity, y es compatible con teclado, mando y dispositivos móviles.

      El juego se organiza en 5 escenas: inicio, menú de niveles, nivel jugable (actualmente 1), pantallas de carga (según si se avanza o retrocede) y pantallas de resultado (victoria/derrota), que se sobreponen al nivel.

      Freezer tiene 2 fases: en la primera huye y ataca, en la segunda se transforma y combate más intensamente. El jugador dispone de un sistema de vidas y se muestra la barra de salud del jefe al acercarse. Los disparos están gestionados por prefabs con colisiones personalizadas, y los scripts se organizan por herencia para reutilizar lógica común entre elementos como balas o personajes.

      Las animaciones están editadas desde sprites base, mejorados y adaptados para tener movimiento fluido: idle, correr, disparar, salto, muerte, en ambas direcciones. Los enemigos también tienen animaciones de disparo, daño y muerte. Al recibir daño, el personaje parpadea en rojo como feedback visual.

      El sonido usa AudioSource con efectos reales de Dragon Ball. Existen pantallas de pausa, derrota y victoria. Aunque solo hay un nivel, el juego está preparado para expandirse. En el futuro, se podría añadir una tienda con monedas, más personajes jugables y conexión a base de datos.

      De más de 200 personas que lo han probado, nadie lo ha superado en menos de 10 intentos.
    `,
    technologies: ['Unity', 'C#', 'Pixel Art'],
    images: [
      '/assets/pixelball_screenshot1.png',
      // '/assets/pixelball_screenshot2.png', // <-- otras imágenes que puedes activar
    ],
    video: '/assets/pixelball_demo.mp4', // Comentado por defecto en el componente
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
