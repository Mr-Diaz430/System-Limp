export function inicio() {
  const container = document.getElementById('content');
  container.innerHTML = `
    <!-- SECCIÓN 1: HERO -->
    <section id="hero" class="position-relative vh-100 overflow-hidden">      
      <div class="position-absolute top-0 start-0 w-100 h-100" style="z-index: 0;">
        <video 
          autoplay 
          loop 
          muted 
          playsinline 
          class="w-100 h-100 object-cover"
          style="object-fit: cover;"
        >
          <source src="/src/assets/hero-video.mp4" type="video/mp4">
          <!-- Fallback -->
          <img src="/src/assets/hero-fallback.jpg" alt="Casa limpia" class="w-100 h-100 object-cover">
        </video>
        
        <!-- Overlay oscuro -->
        <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>
      </div>
      
      <div class="container position-relative h-100 d-flex align-items-center justify-content-center" style="z-index: 1;">
        <div class="text-center text-white max-w-3xl">
      
          <!-- Títulos -->
          <h2 class="display-2 mb-3">
            <strong>Relajate</strong>, nosotros nos <strong>ocupamos de la limpieza</strong>
          </h2>
          <p class="fs-3 fw-light mb-5 opacity-90">
            Servicio recurrente certificado, Limpieza profesional y garantía de satisfacción
          </p>
          
          <!-- Botones -->
          <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a href="/quote" class="btn btn-primary btn-lg px-5 py-3">
              <i class="bi bi-calculator me-2"></i>Cotizar ahora
            </a>
            <a href="tel:+541199999999" class="btn btn-outline-light btn-lg px-5 py-3">
              <i class="bi bi-telephone me-2"></i>Llamanos
            </a>
          </div>

        </div>
      </div>
    </section>


  
    <!-- SECCIÓN 2: TRUST BAR -->
    <section class="bg-light py-5 border-bottom">
      <div class="container">
        <div class="row g-4 text-center">
          
          <div class="col-md-4 d-flex align-items-center justify-content-center gap-3">
            <i class="bi bi-shield-check text-primary fs-1"></i>
            <div class="text-start">
              <h3 class="h5 mb-0">Personal verificado</h3>
              <small class="text-muted">Certificados y con antecedentes</small>
            </div>
          </div>
          
          <div class="col-md-4 d-flex align-items-center justify-content-center gap-3">
            <i class="bi bi-people-fill text-primary fs-1"></i>
            <div class="text-start">
              <h3 class="h5 mb-0">Seguro de responsabilidad</h3>
              <small class="text-muted">Cobertura completa incluida</small>
            </div>
          </div>
          
          <div class="col-md-4 d-flex align-items-center justify-content-center gap-3">
            <i class="bi bi-arrow-repeat text-primary fs-1"></i>
            <div class="text-start">
              <h3 class="h5 mb-0">Garantía 24h</h3>
              <small class="text-muted">Satisfacción 100% garantizada</small>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- SECCIÓN 3: CÓMO FUNCIONA -->
    <section class="py-5 bg-white">
      <div class="container">
        
        <!-- Título con subrayado decorativo -->
        <div class="text-center mb-5">
          <h2 class="display-5 fw-semibold mb-3">Cómo funciona</h2>
          <div class="mx-auto" style="width: 80px; height: 4px; background: var(--bs-primary); border-radius: 2px;"></div>
        </div>
        
        <div class="row g-5 text-center">
          <div class="col-md-4">
            <!-- Círculo más grande y con fondo primario -->
            <div class="mb-4">
              <div class="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center shadow" 
                  style="width: 50px; height: 50px;">
                <span class="fs-2 fw-bold">1</span>
              </div>
            </div>
            <i class="bi bi-calendar-check text-primary d-block mb-3 fs-1"></i>
            <h3 class="h4 fw-semibold mb-2">Reservá online</h3>
            <p class="text-muted px-3">Elegí fecha, hora y tipo de servicio en minutos</p>
          </div>
          
          <div class="col-md-4">
            <div class="mb-4">
              <div class="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center shadow" 
                  style="width: 50px; height: 50px;">
                <span class="fs-2 fw-bold">2</span>
              </div>
            </div>
            <i class="bi bi-house-door text-primary d-block mb-3 fs-1"></i>
            <h3 class="h4 fw-semibold mb-2">Relajate en casa</h3>
            <p class="text-muted px-3">Nuestro equipo llega puntual con todo el equipamiento</p>
          </div>
          
          <div class="col-md-4">
            <div class="mb-4">
              <div class="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center shadow" 
                  style="width: 50px; height: 50px;">
                <span class="fs-2 fw-bold">3</span>
              </div>
            </div>
            <i class="bi bi-stars text-primary d-block mb-3 fs-1"></i>
            <h3 class="h4 fw-semibold mb-2">Disfrutá el resultado</h3>
            <p class="text-muted px-3">Casa impecable con garantía de satisfacción</p>
          </div>
        </div>
      </div>
    </section>

  
    <!-- SECCIÓN 4: SERVICIOS -->
    <section id="servicios" class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center display-5 fw-semibold mb-5">Nuestros servicios</h2>
        <div class="row g-4">
          
          <!-- Servicio 1 (placeholder) -->
          <div class="col-md-6 col-lg-3">
            <div class="card h-100 shadow-sm">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400" 
                   class="card-img-top" alt="Limpieza standard">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">Limpieza Standard</h5>
                <p class="card-text text-muted small">Limpieza general y mantenimiento del hogar</p>
                <div class="mt-auto">
                  <div class="mb-3">
                    <div class="d-flex align-items-center gap-2 mb-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <small>Aspirado y trapeado.</small>
                    </div>
                    <div class="d-flex align-items-center gap-2 mb-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <small>Limpieza detallada de baños.</small>
                    </div>
                    <div class="d-flex align-items-center gap-2 mb-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <small>Polvo de superficies, estantes y muebles.</small>
                    </div>
                    <div class="d-flex align-items-center gap-2 mb-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <small>Orden y desinfección general de espacios.</small>
                    </div>
                  </div>
                  <div class="d-grid gap-2">
                    <a href="#" class="btn btn-success btn-sm">Reservar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Servicio 2 (placeholder) -->
          <div class="col-md-6 col-lg-3">
            <div class="card h-100 shadow-sm">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400" 
                   class="card-img-top" alt="Limpieza mudanza">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">Limpiezas programadas</h5>
                <p class="card-text text-muted small"> Nuestro servicio más popular. Ideal para mantenimiento semanal o quincenal de un hogar, hospedajes o AirBnb.</p>
                <div class="mt-auto">
                  <div class="mb-3">
                    <div class="d-flex align-items-center gap-2 mb-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <small>Mantenimiento semanal, quincenal o según la necesidad.</small>
                    </div>
                    <div class="d-flex align-items-center gap-2 mb-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <small>Limpieza rápida y eficiente de pisos y superficies.</small>
                    </div>
                    <div class="d-flex align-items-center gap-2 mb-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <small>Desinfección profunda.</small>
                    </div>
                    <div class="d-flex align-items-center gap-2 mb-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <small>Aireado y orden general del espacio.</small>
                    </div>
                  </div>
                  <div class="d-grid gap-2">
                    <a href="#" class="btn btn-success btn-sm">Reservar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>


    <!-- SECCIÓN 5: Reseñas - LO MÁS IMPORTANTE -->
<section id="reseñas" class="py-5 bg-primary text-white">
  <div class="container">
    
    <!-- Título destacado -->
    <div class="text-center mb-5">
      <h2 class="display-4 fw-bold mb-3">Lo que dicen nuestros clientes</h2>
      <div class="mx-auto" style="width: 100px; height: 4px; background: var(--bs-white); border-radius: 2px;"></div>
    </div>

    <!-- Carrousel Bootstrap -->
    <div id="testimonialCarousel" class="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="5000">
      
      <!-- Indicadores (dots) - MOVIDOS debajo de la imagen -->
      <div class="carousel-indicators position-relative mb-0" style="bottom: -40px;">
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Testimonio 1"></button>
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Testimonio 2"></button>
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" aria-label="Testimonio 3"></button>
      </div>

      <!-- Slides -->
      <div class="carousel-inner">
        
        <!-- Slide 1 -->
        <div class="carousel-item active">
          <div class="row justify-content-center align-items-center g-4">
            <div class="col-lg-5">
              <img src="public/house3.jpg" 
                   class="img-fluid rounded shadow-lg" 
                   alt="Casa del cliente">
            </div>
            <div class="col-lg-5">
              <div class="p-4">
                <!-- Estrellas -->
                <div class="mb-3">
                  <i class="bi bi-star-fill text-warning fs-3"></i>
                  <i class="bi bi-star-fill text-warning fs-3"></i>
                  <i class="bi bi-star-fill text-warning fs-3"></i>
                  <i class="bi bi-star-fill text-warning fs-3"></i>
                  <i class="bi bi-star-fill text-warning fs-3"></i>
                </div>
                
                <!-- Texto -->
                <blockquote class="blockquote mb-4">
                  <p class="fs-4 fst-italic mb-3">"Excelente servicio, llegaron puntuales y dejaron mi casa impecable. Los recomiendo totalmente."</p>
                  <footer class="blockquote-footer text-white fst-italic">
                    <strong>María González</strong><br>
                    <cite class="text-white-50">Palermo, Buenos Aires</cite>
                  </footer>
                </blockquote>
                
                <!-- Badge de confianza -->
                <div class="d-inline-flex align-items-center gap-2 bg-success px-3 py-2 rounded-pill">
                  <i class="bi bi-check-circle-fill"></i>
                  <small class="fw-semibold">Cliente verificado</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item">
          <div class="row justify-content-center align-items-center g-4">
            <div class="col-lg-5">
              <img src="public/house2.jpg" 
                   class="img-fluid rounded shadow-lg" 
                   alt="Casa del cliente 2">
            </div>
            <div class="col-lg-5">
              <div class="p-4">
                <div class="mb-3">
                  <i class="bi bi-star-fill text-warning fs-3"></i>
                  <i class="bi bi-star-fill text-warning fs-3"></i>
                  <i class="bi bi-star-fill text-warning fs-3"></i>
                  <i class="bi bi-star-fill text-warning fs-3"></i>
                  <i class="bi bi-star-fill text-warning fs-3"></i>
                </div>
                <blockquote class="blockquote mb-4">
                  <p class="fs-4 fst-italic mb-3">"Profesionales de primera. Mi casa nunca había estado tan limpia. Super recomendados!"</p>
                  <footer class="blockquote-footer text-white fst-italic">
                    <strong>Carlos Martínez</strong><br>
                    <cite class="text-white-50">Belgrano, Buenos Aires</cite>
                  </footer>
                </blockquote>
                <div class="d-inline-flex align-items-center gap-2 bg-success px-3 py-2 rounded-pill">
                  <i class="bi bi-check-circle-fill"></i>
                  <small class="fw-semibold">Cliente verificado</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item">
          <div class="row justify-content-center align-items-center g-4">
            <div class="col-lg-5">
              <img src="public/house3.jpg" 
                   class="img-fluid rounded shadow-lg" 
                   alt="Casa del cliente 3">
            </div>
            <div class="col-lg-5">
              <div class="p-4">
                <div class="mb-3">
                  <i class="bi bi-star-fill text-warning fs-3"></i>
                  <i class="bi bi-star-fill text-warning fs-3"></i>
                  <i class="bi bi-star-fill text-warning fs-3"></i>
                  <i class="bi bi-star-fill text-warning fs-3"></i>
                  <i class="bi bi-star-fill text-warning fs-3"></i>
                </div>
                <blockquote class="blockquote mb-4">
                  <p class="fs-4 fst-italic mb-3">"El equipo es confiable, puntual y muy detallista. Vuelvo a contratarlos sin dudarlo."</p>
                  <footer class="blockquote-footer text-white fst-italic">
                    <strong>Lucía Fernández</strong><br>
                    <cite class="text-white-50">Recoleta, Buenos Aires</cite>
                  </footer>
                </blockquote>
                <div class="d-inline-flex align-items-center gap-2 bg-success px-3 py-2 rounded-pill">
                  <i class="bi bi-check-circle-fill"></i>
                  <small class="fw-semibold">Cliente verificado</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <section class="bg-success py-5 bg-primary text-white">
      <div class="container text-center">
        <h2 class="display-5 fw-semibold mb-3">¿Tu casa está lista para brillar?</h2>
        <p class="fs-5 mb-4">Reservá ahora y disfrutá de un hogar impecable</p>
        <a href="#" class="btn btn-success btn-lg">Reservar ahora</a>
      </div>
    </section>

  `;
}
