import { Router } from  'express';
import Html from '../controllers/html.controllers.js';
import Css from '../controllers/css.controllers.js';


const router = Router();

router.get('/', Html.getPrincipal);

router.get('/css/principal', Css.getPrincipal);

router.get('/css/user', Css.getUserArea);

export default router;