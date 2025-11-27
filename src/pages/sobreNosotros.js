export function sobreNosotros() {
  const container = document.getElementById('content');
 
  container.innerHTML = `
    <div class="container mx-auto px-4 py-5">
      <div class="mx-auto" style="max-width: 900px;">
        
        <!-- Botón Volver -->
        <a href="/" class="btn btn-outline-secondary mb-4">
          <i class="bi bi-arrow-left me-2"></i>Volver al inicio
        </a>

        <!-- Header -->
        <div class="mb-5 text-center">
          <h1 class="display-4 fw-semibold mb-3">Sobre nosotros</h1>
          <p class="fs-5 text-muted">
            Más de 10 años brindando servicios profesionales de limpieza en Buenos Aires
          </p>
        </div>

        <!-- Historia -->
        <div class="mb-5">
          <h2 class="h3 fw-semibold mb-3">Nuestra historia</h2>
          <p class="text-muted mb-3">
            Casa Impecable nació en 2013 con una misión simple: hacer que mantener tu hogar limpio sea
            fácil, confiable y accesible. Comenzamos como un pequeño equipo de 3 personas apasionadas
            por la limpieza profesional, y hoy contamos con más de 50 profesionales certificados.
          </p>
          <p class="text-muted">
            A lo largo de estos años, hemos limpiado más de 15,000 hogares, siempre manteniendo nuestro
            compromiso con la calidad, la confianza y el uso de productos eco-friendly. Cada miembro de
            nuestro equipo está cuidadosamente seleccionado, capacitado y verificado para garantizar tu
            tranquilidad.
          </p>
        </div>

        <!-- Valores -->
        <div class="mb-5">
          <h2 class="h3 fw-semibold mb-4 text-center">Nuestros valores</h2>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                <div class="card-body text-center">
                  <i class="bi bi-shield-check text-primary fs-1 mb-3 d-block"></i>
                  <h3 class="card-title h5 mb-2">Confianza</h3>
                  <p class="card-text text-muted small">
                    Personal verificado con antecedentes y seguro de responsabilidad civil
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-body text-center">
                  <i class="bi bi-heart-fill text-primary fs-1 mb-3 d-block"></i>
                  <h3 class="card-title h5 mb-2">Dedicación</h3>
                  <p class="card-text text-muted small">
                    Tratamos cada hogar como si fuera el nuestro, con cuidado y atención al detalle
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-body text-center">
                  <i class="bi bi-tree text-primary fs-1 mb-3 d-block"></i>
                  <h3 class="card-title h5 mb-2">Sostenibilidad</h3>
                  <p class="card-text text-muted small">
                    100% productos eco-friendly, seguros para tu familia y el planeta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Por qué elegirnos -->
        <div class="mb-5">
          <h2 class="h3 fw-semibold mb-4 text-center">Por qué elegirnos</h2>
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="d-flex gap-3">
                <i class="bi bi-award-fill text-primary fs-2 flex-shrink-0"></i>
                <div>
                  <h3 class="h5 mb-2">Certificación profesional</h3>
                  <p class="text-muted small">
                    Todo nuestro personal está certificado en técnicas de limpieza profesional y manejo
                    seguro de productos
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="d-flex gap-3">
                <i class="bi bi-people-fill text-primary fs-2 flex-shrink-0"></i>
                <div>
                  <h3 class="h5 mb-2">Equipos consistentes</h3>
                  <p class="text-muted small">
                    Trabajamos para asignarte el mismo equipo en cada visita para que se familiaricen con
                    tu hogar
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="d-flex gap-3">
                <i class="bi bi-clock-history text-primary fs-2 flex-shrink-0"></i>
                <div>
                  <h3 class="h5 mb-2">Puntualidad garantizada</h3>
                  <p class="text-muted small">
                    Llegamos siempre en el horario acordado. Si hay algún inconveniente, te avisamos con
                    anticipación
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="d-flex gap-3">
                <i class="bi bi-shield-check text-primary fs-2 flex-shrink-0"></i>
                <div>
                  <h3 class="h5 mb-2">Garantía total</h3>
                  <p class="text-muted small">
                    Si algo no cumple tus expectativas, volvemos a limpiarlo sin costo adicional en 24 hs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-primary text-white rounded p-5 text-center">
          <h2 class="h3 fw-semibold mb-3">
            ¿Listo para experimentar la diferencia?
          </h2>
          <p class="mb-4">
            Uníte a miles de familias que confían en nosotros para mantener sus hogares impecables
          </p>
          <a href="/quote" class="btn btn-success btn-lg">
            Solicitar presupuesto
          </a>
        </div>
        
      </div>
    </div>
  `;
}