import mongoose from 'mongoose';

const PermissoesSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

export default PermissoesSchema;