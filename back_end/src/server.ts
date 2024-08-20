import express from 'express';
import router from './routes/routes.ts';
import json from 'body-parser';
import mongoose from 'mongoose';


const app:any = express();
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/blog');

app.use(router);


app.listen(3000, () => {
    console.log('Server running on port 3000');
})