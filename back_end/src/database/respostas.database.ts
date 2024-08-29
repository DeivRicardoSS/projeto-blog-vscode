import mongoose from 'mongoose';

const RespostaSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    id_pai: {
        type: String,
        required: true
    },
    id_dono: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: true
    }
})

export default RespostaSchema;