import mongoose from 'mongoose';

const AnuncioSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    redirecionavel: {
        type: Boolean,
        required: true
    },
    linkblank: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        required: true
    }
});

export default AnuncioSchema;