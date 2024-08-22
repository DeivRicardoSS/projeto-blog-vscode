// Importações
import {Router} from 'express';
import section from '../controllers/section.controllers.ts';
import cadastro from '../controllers/cadastro.controllers.ts';
import login from '../controllers/login.controllers.ts';

// Iniciando
const users:any = Router();

// Importação das Rotas

// Rota de Cadastro
users.post('/cadastro', cadastro);

// Rota de Login
users.post('/login', login);

// Rota da Sessão do usuário
users.get('/section/:id', section);

export default users;