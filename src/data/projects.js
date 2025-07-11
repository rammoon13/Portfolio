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
    icon: '/assets/iconoezpos.png',
    description:
      'Aplicación móvil para asociaciones y eventos. Permite gestionar productos, ventas y turnos desde el teléfono.',
    longDescription: `
      EZPOS es una aplicación Android desarrollada para facilitar la gestión de productos, ventas y usuarios en eventos y asociaciones pequeñas o medianas. Su objetivo es claro: ofrecer un sistema POS (punto de venta) rápido, intuitivo y autónomo que funcione sin necesidad de conexión a internet.

      Su interfaz está diseñada pensando en la usabilidad: desde el primer vistazo se pueden registrar ventas, añadir productos o consultar resúmenes de ingresos. Las operaciones se ejecutan con pocos toques, y los botones están optimizados para entornos de alto movimiento como ferias o reuniones con gran afluencia.

      El backend está implementado en SQLite, lo que permite una persistencia local y estable de los datos. Las tablas se gestionan con lógica robusta y validaciones preventivas para evitar errores comunes como duplicados o ventas sin stock. Cada módulo (productos, ventas, categorías, usuarios, etc.) está dividido por clases separadas con adaptadores y modelos bien definidos.

      El diseño UI sigue las guías de Material Design, con colores intuitivos, menús claros y navegación fluida. Además, el rendimiento está optimizado para funcionar en móviles de gama baja, asegurando que cualquier miembro de una asociación pueda usarlo sin problemas.

      EZPOS fue utilizado por asociaciones reales en contextos prácticos, como ferias y torneos, donde se gestionaron más de 100 productos y más de 500 ventas en tiempo real, sin errores. Todo fue registrado localmente, sincronizado manualmente y exportado con éxito al finalizar los eventos.

      Está preparado para evolucionar a versiones conectadas en red, con sincronización en la nube y login por roles. Pero incluso en su forma actual, demuestra una arquitectura sólida y una visión clara: empoderar a pequeños colectivos con herramientas profesionales.
    `,
    technologies: ['Java', 'Android Studio', 'SQLite', 'GitHub', 'M-V-VM'],
    images: [
      '/assets/ezpos_screenshot1.png',
      '/assets/ezpos_screenshot2.png',
      '/assets/ezpos_screenshot3.png',
      '/assets/ezpos_screenshot4.png',
      '/assets/ezpos_screenshot5.png',
      '/assets/ezpos_screenshot6.png',
      '/assets/ezpos_screenshot7.png',
      '/assets/ezpos_screenshot8.png',
      '/assets/ezpos_screenshot9.png',
      '/assets/ezpos_screenshot10.png',
    ],
    video: '/assets/ezpos_demo.mp4',
    apk: '/downloads/EZPOS.apk'
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
