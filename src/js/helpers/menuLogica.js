// js/helpers/menuLogica.js

export function activarMenuTransparente(router) {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  function actualizarEstilo() {
    const esInicio = window.location.pathname === '/';
    const estaArriba = window.scrollY <= 50;
    const menuAbierto = navbar.classList.contains('menu-open');

    if (esInicio && estaArriba && !menuAbierto) {
      navbar.classList.remove('scrolled');
    } else {
      navbar.classList.add('scrolled');
    }
  }

  // ---------- CERRAR AL HACER CLICK ----------
  const enlaces = document.querySelectorAll('#navbarNav a.nav-link');
  const botonToggler = document.querySelector('.navbar-toggler');

  enlaces.forEach(link => {
    link.addEventListener('click', () => {
      // Si el menú está ABIERTO en móvil, cerrarlo
      if (window.getComputedStyle(botonToggler).display !== 'none') {
        botonToggler.click(); // simula tocar el botón hamburguesa
      }
    });
  });

  // ---------- Resto igual ----------
  actualizarEstilo();
  window.addEventListener('scroll', actualizarEstilo);

  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse) {
    navbarCollapse.addEventListener('show.bs.collapse', () => {
      navbar.classList.add('menu-open');
      actualizarEstilo();
    });
    navbarCollapse.addEventListener('hide.bs.collapse', () => {
      navbar.classList.remove('menu-open');
      actualizarEstilo();
    });
  }

  if (router?.hooks) {
    router.hooks({ after: actualizarEstilo });
  }
}
