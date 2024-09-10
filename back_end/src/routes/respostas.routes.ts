import { Router } from 'express';
import newResponse from '../controllers/newResponse.controllers.ts';

const respostas:any = Router();

respostas.post('/', newResponse);

export default respostas;