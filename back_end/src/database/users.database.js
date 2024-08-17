import mongoose from 'mongoose';


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


//const User = mongoose.model('User', UserSchema);
export default UserSchema;