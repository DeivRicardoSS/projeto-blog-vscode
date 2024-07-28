//importação do express
const express = require('express');
const app = express();
//porta
const port = 3000;

//importação do mongoose
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:<porta>/<banco>").then(() => {
    console.log('Conectado ao mongoDB');
}).catch((err) => {
    console.log(err);
})

const cadastro = require('./rotas/cadastro');

app.use('/cadastro', cadastro);




//inicializando o servidor
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
})