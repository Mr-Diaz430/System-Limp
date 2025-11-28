import { scrollToTop } from "../js/utils/scrollToTop";

export function sobreNosotros() {
  scrollToTop();
  const container = document.getElementById('content');
 
  container.innerHTML = `
    <div class="container mx-auto px-4 py-5">
      <div class="w-100 text-center pb-4 text-lg-start pt-4">
        <a href="/" class="btn btn-outline-secondary text-center">
          <i class="bi bi-arrow-left me-2"></i>Volver al inicio
        </a>
      </div>
      <div class="mx-auto" style="max-width: 1300px;">

        <!-- Hero título / subtítulo -->
        <section class=" d-flex align-items-center justify-content-center text-center px-3">
          <div class="">
            <h1 class="display-4 fw-bold pt-4 hero-title text-white rounded-bottom">
              Sobre <span class="text-dark bg-warning p-2 rounded">nosotros</span>
            </h1>
            <p class="lead text-muted mb-5 pt-4">
              Más de 10 años brindando servicios profesionales de limpieza en Buenos Aires.
            </p>
          </div>
        </section>

        <!-- Historia -->
        <div class="mb-5">
          <h2 class="h3 fw-bold text-dark mb-3 bg-warning hero-diseño p-3 rounded-3 fs-3 tex">Nuestra 
          <span class="text-white border-bottom border-2 border-white pb-1">Historia</span>
          </h2>
          <p class="text-muted mb-3 pt-lg-3 fs-5-lg">
            Casa Impecable nació en 2013 con una misión simple: hacer que mantener tu hogar limpio sea
            fácil, confiable y accesible. Comenzamos como un pequeño equipo de 3 personas apasionadas
            por la limpieza profesional, y hoy contamos con más de 50 profesionales certificados.
          </p>
          <p class="text-muted fs-5-lg pb-lg-3">
            A lo largo de estos años, hemos limpiado más de 15,000 hogares, siempre manteniendo nuestro
            compromiso con la calidad, la confianza y el uso de productos eco-friendly. Cada miembro de
            nuestro equipo está cuidadosamente seleccionado, capacitado y verificado para garantizar tu
            tranquilidad.
          </p>
        </div>

        <!-- Valores -->
        <div class="mb-5">
          <div class="title-wrapper">
          <h2 class="hero-diseño2 d-inline-block fw-semibold mb-4 text-center">
            Nuestros valores
          </h2>
        </div>
          <div class="row row-cols-1 row-cols-md-3 g-4 pt-3 pb-lg-5">
            <div class="col">
              <div class="card h-100 pb-lg-5">
                <div class="card-body text-center fs-6-lg">
                  <i class="bi bi-shield-check text-primary fs-1 mb-3 d-block"></i>
                  <h3 class="card-title h5 mb-2">Confianza</h3>
                  <p class="card-text text-muted small ">
                    Personal verificado con antecedentes y seguro de responsabilidad civil
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 pb-lg-5">
                <div class="card-body text-center fs-6-lg">
                  <i class="bi bi-heart-fill text-primary fs-1 mb-3 d-block"></i>
                  <h3 class="card-title h5 mb-2">Dedicación</h3>
                  <p class="card-text text-muted small ">
                    Tratamos cada hogar como si fuera el nuestro, con cuidado y atención al detalle
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 pb-lg-5">
                <div class="card-body text-center fs-6-lg">
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
        <div class="mb-5 ">
          <h2 class="h3 fw-semibold mb-4 text-center">Por qué elegirnos</h2>
          <div class="row row-cols-1 row-cols-md-2 g-4 py-lg-5 fs-6-lg">
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

        <div class="bg-success text-white rounded p-4 text-center position-relative">
        <div class="box box--desingv2 top-0 start-0 w-100 position-absolute rounded-2"></div>
          <h2 class="h3 fw-semibold z-3 position-relative mt-5">¿Listo para experimentar?</h2>
          <p class="my-4 z-3 m-0">
            Uníte a miles de familias que confían en nosotros para mantener sus hogares impecables
          </p>
          <a href="https://web.whatsapp.com/" class="btn btn-verde btn-lg">
            Contactar al Soporte
          </a>  
        </div>
        
      </div>
    </div>
  `;
}