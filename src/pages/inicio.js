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
      
      <div class="container position-relative h-100 d-flex align-items-center" style="z-index: 1;">
        <div class="max-w-2xl">
          <h1 class="display-3 fw-semibold text-white mb-4">
            Casa impecable, sin levantar un dedo
          </h1>
          <p class="fs-4 text-white-90 mb-6">
            Servicio recurrente certificado, 100% productos eco y garantía de satisfacción
          </p>
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
    <section class="bg-danger py-5">
      <div class="container">
        <h2 class="text-center display-5 fw-semibold mb-5">Cómo funciona</h2>
        <div class="row g-4 text-center">
          <div class="col-md-4">
            <div class="bg-accent text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                 style="width: 60px; height: 60px;">
              <span class="fs-3 fw-bold">1</span>
            </div>
            <i class="bi bi-calendar-check text-primary d-block mb-3 fs-1"></i>
            <h3 class="h5 mb-2">Reservá online</h3>
            <p class="text-muted">Elegí fecha, hora y tipo de servicio en minutos</p>
          </div>
          <div class="col-md-4">
            <div class="bg-accent text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                 style="width: 60px; height: 60px;">
              <span class="fs-3 fw-bold">2</span>
            </div>
            <i class="bi bi-house-door text-primary d-block mb-3 fs-1"></i>
            <h3 class="h5 mb-2">Relajate en casa</h3>
            <p class="text-muted">Nuestro equipo llega puntual con todo el equipamiento</p>
          </div>
          <div class="col-md-4">
            <div class="bg-accent text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                 style="width: 60px; height: 60px;">
              <span class="fs-3 fw-bold">3</span>
            </div>
            <i class="bi bi-stars text-primary d-block mb-3 fs-1"></i>
            <h3 class="h5 mb-2">Disfrutá el resultado</h3>
            <p class="text-muted">Casa impecable con garantía de satisfacción</p>
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
                      <small>Baños y cocina</small>
                    </div>
                    <div class="d-flex align-items-center gap-2 mb-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <small>Aspirado y barrido</small>
                    </div>
                  </div>
                  <p class="fw-bold text-primary fs-5">$5.500</p>
                  <div class="d-grid gap-2">
                    <a href="#" class="btn btn-outline-primary btn-sm">Ver checklist</a>
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
                <h5 class="card-title">Limpieza Mudanza</h5>
                <p class="card-text text-muted small">Pre/post mudanza para entrega/recibimiento</p>
                <div class="mt-auto">
                  <div class="mb-3">
                    <div class="d-flex align-items-center gap-2 mb-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <small>Limpieza integral</small>
                    </div>
                    <div class="d-flex align-items-center gap-2 mb-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <small>Desinfección profunda</small>
                    </div>
                  </div>
                  <p class="fw-bold text-primary fs-5">$12.500</p>
                  <div class="d-grid gap-2">
                    <a href="#" class="btn btn-outline-primary btn-sm">Ver checklist</a>
                    <a href="#" class="btn btn-success btn-sm">Reservar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>


    <!-- SECCIÓN 5: Reseñas -->
    <section id="reseñas" class="bg-light py-5">
      <div class="container">
        <h2 class="text-center display-5 fw-semibold mb-5">Lo que dicen nuestros clientes</h2>
        
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="card shadow-sm">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161d56f7f?w=400" 
                       class="img-fluid rounded-start h-100 object-cover" 
                       alt="Casa del cliente">
                </div>
                <div class="col-md-8">
                  <div class="card-body p-4">
                    <div class="mb-3">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                    </div>
                    <blockquote class="blockquote">
                      <p>"Excelente servicio, llegaron puntuales y dejaron mi casa impecable. Los recomiendo totalmente."</p>
                      <footer class="blockquote-footer mt-2">María González <cite class="text-muted">Palermo</cite></footer>
                    </blockquote>
                  </div>
                </div>
              </div>
 
              <!-- Controles (placeholder para luego conectar JS) -->
              <div class="card-footer bg-transparent text-center">
                <div class="btn-group" role="group">
                  <button class="btn btn-sm btn-outline-primary active" disabled>Anterior</button>
                  <button class="btn btn-sm btn-outline-primary">Siguiente</button>
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
