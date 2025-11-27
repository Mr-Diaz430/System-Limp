export function preguntasFrecuentes() {
  const container = document.getElementById('content');

  container.innerHTML = `
    <div class="container mx-auto px-4 py-5">
     <div class="w-100 text-center pb-4">
      <a href="/" class="btn btn-outline-secondary text-center">
        <i class="bi bi-arrow-left me-2"></i>Volver al inicio
      </a>
     </div>
       
      <div class="mx-auto" style="max-width: 900px;">
        
        <!-- Header -->
        <div class="text-center">
          <h1 class="display-5 fw-semibold mb-3">Preguntas Frecuentes</h1>
          <p class="fs-6 text-muted mb-4">
            Resolvemos tus dudas sobre nuestros servicios de limpieza profesional
          </p>
        </div>

        <!-- Acordeón FAQ -->
        <div class="mb-5">
          <div class="accordion" id="faqAccordion">
            
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  <i class="bi bi-question-circle text-primary me-2 fs-4"></i>
                  ¿Qué incluye un servicio de limpieza estándar?
                </button>
              </h2>
              <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-muted">
                  Incluye limpieza de baños, cocina, superficies, aspirado y barrido de pisos, 
                  remoción de polvo y ordenamiento general. Podés personalizarlo según tus necesidades.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  <i class="bi bi-shield-check text-primary me-2 fs-4"></i>
                  ¿Cómo verifican a su personal?
                </button>
              </h2>
              <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-muted">
                  Todos los empleados pasan entrevistas, verificación de antecedentes penales, 
                  referencias laborales y capacitación certificada antes de empezar a trabajar.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  <i class="bi bi-leaf text-primary me-2 fs-4"></i>
                  ¿Usan productos eco-friendly?
                </button>
              </h2>
              <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-muted">
                  Sí, utilizamos productos 100% biodegradables y seguros para niños, mascotas y personas 
                  con alergias. Cuidamos tu hogar y el planeta.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                  <i class="bi bi-clock-history text-primary me-2 fs-4"></i>
                  ¿Cuánto tiempo dura cada visita?
                </button>
              </h2>
              <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-muted">
                  Depende del tamaño del hogar: 2-3 horas para deptos de 1-2 ambientes, 3-4 horas para casas 
                  medianas. Te confirmamos el tiempo exacto al coordinar el servicio.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                  <i class="bi bi-coin text-primary me-2 fs-4"></i>
                  ¿Qué métodos de pago aceptan?
                </button>
              </h2>
              <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-muted">
                  Aceptamos efectivo, transferencia bancaria, tarjetas de crédito/débito y Mercado Pago. 
                  Podés pagar al finalizar el servicio o por adelantado desde tu cuenta online.
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- CTA -->
        <div class="bg-success text-white rounded p-5 text-center position-relative">
        <div class="box top-0 start-0 w-100 position-absolute rounded-2"></div>
          <h2 class="h3 fw-semibold z-3 position-relative mt-5 ">¿Tenés otra pregunta?</h2>
          <p class="mb-4 z-3 m-0">
            No dudes en contactarnos, estamos para ayudarte
          </p>
          <a href="/contact" class="btn btn-verde btn-lg">
            Contactar al Soporte
          </a>
         
        </div>
      </div>
    </div>
  `;
  
}
