import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

import users from './users.routes';
router.use('/users', users);

export default router;