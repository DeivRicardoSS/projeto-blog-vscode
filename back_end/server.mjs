import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';

const app = express();



// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blog').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import cadastro from './routes/cadastro.mjs';
app.use('/cadastro', cadastro);




app.listen(3000, () => {
    console.log('Server started on port 3000');
})