import { Router } from 'express';
import Users from '../controllers/users.controllers';

const router = Router();

router.post('/cadastro', Users.cadastro);

export default router;