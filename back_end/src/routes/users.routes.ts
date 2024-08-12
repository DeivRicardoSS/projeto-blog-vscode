import { Router } from 'express';
import users from '../controllers/users.controllers';

const router = Router();

router.post('/cadastro', users.cadastro);

export default router;