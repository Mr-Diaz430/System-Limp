import { router } from './router.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import './styles/main.scss' 

document.querySelector('#app').innerHTML = `
  <nav>
    <a href="/" data-navigo>Inicio</a>
    <a href="#servicios">Servicios</a>
    <a href="#reseñas">Reseñas</a>
    <a href="/sobre-nosotros" data-navigo>Sobre Nosotros</a>
    <a href="/preguntas-frecuentes" data-navigo>FAQ</a>
  </nav>


  <div id="content">
    <!-- AQUI SE INYECTA EL CODIGO LEONARDOGAMER -->
  </div>


  <footer>
    <h4>FOOTER</h4>
  </footer>

`

router.resolve()
router.updatePageLinks()
