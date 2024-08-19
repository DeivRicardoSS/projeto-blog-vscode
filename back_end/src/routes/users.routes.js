import {Router} from 'express';
import Users from '../controllers/users.controllers.js';

const users = Router();

// Importação das Rotas

// Rota de Cadastro
users.post('/cadastro', (req, res) => {Users.cadastro(req, res)});

// Rota de Login
users.post('/login', (req, res) => {Users.login(req, res)});

// Rota da Sessão do usuário
users.get('/section/:id', (req, res) => {Users.user_section(req, res)});

export default users;