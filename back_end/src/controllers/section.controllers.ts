// Importações
import mongoose from 'mongoose';
import UserSchema from '../database/users.database.ts';

// Definindo Coleção de Usuários
const User = mongoose.model('User', UserSchema);

export default function section(req, res){
    const section:string = req.params.id;

    let user = User.findOne({'user_area.section_id': section}).then((user)=>{
        return res.send({
            status: 200,
            user: user,
            id: section
        });
    }).catch((err) => {
        return res.send("Erro: " + err);
    });    
}