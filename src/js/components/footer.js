export function footer() {
  return `
    <footer class="border-top bg-light py-5">
      <div class="container">
        <div class="row g-4">
          
          <!-- Brand -->
          <div class="col-md-4">
            <a href="javascript:void(0)" class="d-flex align-items-center gap-2 text-decoration-none mb-3" data-navigo>
              <i class="bi bi-stars text-primary fs-4"></i>
              <span class="h5 mb-0 text-primary fw-bold">Casa Impecable</span>
            </a>
            <p class="text-muted small">
              Servicio profesional de limpieza con garantía de satisfacción. Más de 10 años en Buenos Aires.
            </p>
          </div>

          <!-- Servicios reales -->
          <div class="col-md-4">
            <h3 class="h5 fw-semibold mb-3">Servicios</h3>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="/#servicios" class="text-muted text-decoration-none small">
                  Limpieza Standard
                </a>
              </li>
              <li class="mb-2">
                <a href="/#servicios" class="text-muted text-decoration-none small">
                  Limpiezas Programadas
                </a>
              </li>
              <li class="mb-2">
                <a href="/sobre-nosotros" class="text-muted text-decoration-none small" data-navigo>
                  Sobre Nosotros
                </a>
              </li>
              <li class="mb-2">
                <a href="/preguntas-frecuentes" class="text-muted text-decoration-none small" data-navigo>
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          <!-- Contacto -->
          <div class="col-md-4">
            <h3 class="h5 fw-semibold mb-3">Contacto</h3>
            <ul class="list-unstyled text-muted small">
              <li class="mb-1">Lunes a Sábado</li>
              <li class="mb-2">8:00 - 20:00 hs</li>
              <li class="mb-2">
                <a href="javascript:void(0)" class="text-decoration-none text-muted">
                  <i class="bi bi-telephone me-1"></i>0800-555-0123
                </a>
              </li>
              <li class="mb-3">
                <a href="javascript:void(0)" class="text-decoration-none text-muted">
                  <i class="bi bi-envelope me-1"></i>info@casaimpecable.com
                </a>
              </li>
            </ul>
            <div class="d-flex gap-2">
              <a href="javascript:void(0)" target="" class="text-muted">
                <i class="bi bi-facebook fs-5"></i>
              </a>
              <a href="javascript:void(0)" target="" class="text-muted">
                <i class="bi bi-instagram fs-5"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="border-top mt-4 pt-4 text-center text-muted small">
          <p class="mb-0">&copy; 2025 Casa Impecable. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `;
}