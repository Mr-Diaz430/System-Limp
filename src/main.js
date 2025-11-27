import { router } from './router.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import './styles/main.scss' 

import { footer } from './js/components/footer.js';
import { menu } from './js/components/menu.js';


document.querySelector('#app').innerHTML = `

  ${menu()}

  <div id="content">
    <!-- AQUI SE INYECTA EL CODIGO LEONARDOGAMER -->
  </div>

  ${footer()}
  `;

router.resolve()
router.updatePageLinks()
