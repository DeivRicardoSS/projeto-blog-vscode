import express from 'express';
import path from 'path';
import router from './routes/routes.js';
const app = express();

app.use(router);

app.listen(3001, () => {
    console.log("Servidor Rodando na porta 3001")
})