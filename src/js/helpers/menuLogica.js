export function activarMenuTransparente() {
  const navbar = document.getElementById('navbar');
  const navbarCollapse = document.getElementById('navbarNav');

  function actualizarEstilo() {
    const esInicio = window.location.pathname === '/';
    const estaArriba = window.scrollY <= 50;
    const menuAbierto = navbar.classList.contains('menu-open');

    // Solo en Inicio y arriba y menú cerrado → transparente
    if (esInicio && estaArriba && !menuAbierto) {
      navbar.classList.remove('scrolled');
    } else {
      navbar.classList.add('scrolled');
    }
  }

  // al cargar la página o cambiar de ruta
  actualizarEstilo();

  // al hacer scroll
  window.addEventListener('scroll', actualizarEstilo);

  // al abrir/cerrar menú móvil
  navbarCollapse.addEventListener('show.bs.collapse', () => {
    navbar.classList.add('menu-open');
    actualizarEstilo();
  });
  navbarCollapse.addEventListener('hide.bs.collapse', () => {
    navbar.classList.remove('menu-open');
    actualizarEstilo();
  });

  // al cambiar de ruta (Navigo)
  router.hooks({
    after: actualizarEstilo
  });
}
