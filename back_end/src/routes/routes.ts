import {Router} from 'express';

const router:any = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
})


import users from './users.routes.ts';

router.use('/users', users);

export default router;