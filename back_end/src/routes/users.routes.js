import {Router} from 'express';
import Users from '../controllers/users.controllers.js';

const users = Router();

users.post('/cadastro', (req, res) => {Users.cadastro(req, res)});
users.post('/login', (req, res) => {Users.login(req, res)});

export default users;