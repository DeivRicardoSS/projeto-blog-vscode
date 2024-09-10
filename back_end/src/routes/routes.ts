// Importações
import {Router} from 'express';
import users from './users.routes.ts';
import posts from './posts.routes.ts';
import respostas from './respostas.routes.ts';

// Criando módulo de rota
const router:any = Router();

// Criando rota raiz
router.get('/', (req, res) => {
    res.send('Hello World!');
})



// extendendo servidor para o arquivo users.routes.ts
router.use('/users', users);
router.use('/posts', posts);
router.use('/responses', respostas);

// Exportando módulo
export default router;