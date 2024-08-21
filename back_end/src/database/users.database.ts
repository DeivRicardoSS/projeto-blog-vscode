// Importações
import mongoose from 'mongoose';

// Criando Schema da area do usuário
const UserArea = new mongoose.Schema({
    section_id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Criando Schema do Usuário
const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    },
    data_criacao: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: true
    },
    nascimento: {
        type: Date,
        required: true
    },
    permissoes: {
        type: [String],
        required: true
    },
    user_area: {
        type: UserArea,
        required: true
    }
    
});


// Exportando Schema de Usuário
export default UserSchema;