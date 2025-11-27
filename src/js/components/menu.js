export function menu() {
    return `
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand d-flex align-items-center gap-2 text-success" href="/" data-navigo>
                <i class="bi bi-house-door-fill fs-4"></i>
                <h1 class="h5 mb-0">Casa Impecable</h1>
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
                        <a class="nav-link" href="/" data-navigo>Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#servicios">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#reseñas">Reseñas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/sobre-nosotros" data-navigo>Sobre Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/preguntas-frecuentes" data-navigo>FAQ</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
}