import Navigo from 'navigo'
export const router = new Navigo('/')

// Pages
import { inicio } from './pages/inicio.js';
import { sobreNosotros } from './pages/sobreNosotros.js';
import { preguntasFrecuentes } from './pages/preguntasFrecuentes.js';


// Router
router.on({
  '/'     : inicio,
  '/sobre-nosotros' : sobreNosotros,
  '/preguntas-frecuentes' : preguntasFrecuentes
})