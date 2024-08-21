// Importações
import express from 'express';
import router from './routes/routes.ts';
import mongoose from 'mongoose';

// Criando Servidor
const app:any = express();
// Definindo Formato json
app.use(express.json())

// Conectando ao banco de dados
mongoose.connect('mongodb://localhost:27017/blog');

// Extendendo servidor para arquivo routes.ts
app.use(router);

// Abrindo Servidor
app.listen(3000, () => {
    console.log('Server running on port 3000');
})