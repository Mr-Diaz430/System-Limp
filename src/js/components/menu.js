import { activarMenuTransparente } from '../helpers/menuLogica.js';

export function menu() {
    return `
      <nav id="navbar" class="navbar navbar-expand-lg fixed-top">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center gap-2 text-success" href="/" data-navigo>
                <i class="bi bi-house-door-fill fs-4"></i>
                <h1 class="h5 mb-0 fs-4">Casa Impecable</h1>
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                    <a class="nav-link nav-inicio" href="/" data-navigo>Inicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link nav-servicios" href="/#servicios">Servicios</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link nav-resenas" href="/#reseñas">Reseñas</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link nav-nosotros" href="/sobre-nosotros" data-navigo>Sobre Nosotros</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link nav-faq" href="/preguntas-frecuentes" data-navigo>FAQ</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    `;
}


window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      activarMenuTransparente(window.router); 
    }, 0);
  });
