import { router } from './router.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';

document.querySelector('#app').innerHTML = `
  <nav>
    <a href="/" data-navigo>Inicio</a>
    <a href="#">Servicios</a>
    <a href="#">Trabajos Realizados</a>
    <a href="/sobre-nosotros" data-navigo>Sobre Nosotros</a>
    <a href="/preguntas-frecuentes" data-navigo>FAQ</a>
  </nav>


  <div id="content">
    <!-- AQUI SE INYECTA EL CODIGO -->
  </div>


  <footer>
    <h4>FOOTER</h4>
  </footer>

  `

router.resolve()
router.updatePageLinks()
