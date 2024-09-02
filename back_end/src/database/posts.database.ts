// Importações
import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    id_dono:{
        type: String,
        required: true
    },
    cor:{
        type: [String],
        required: true
    },
    titulo:{
        type: String,
        required: true
    },
    subtitulo:{
        type: String,
        required: true
    },
    conteudo:{
        type: String,
        required: true
    },
    categorias: {
        type: [String],
        required: true
    },
    views: {
        type: Number,
        required: true
    }
});

export default PostSchema;