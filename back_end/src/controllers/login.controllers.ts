// Importações
import mongoose from 'mongoose';
import UserSchema from '../database/users.database.ts';

// Definindo Coleção de Usuários
const User = mongoose.model('User', UserSchema);

export default function login(req, res){
    const body = req.body;
    let email:string = body.email;
    let password:string = body.password;
        
    // Caso alguma entrada esteja vazia ou não exista
    if(!email || !password){
        return res.status(400).json({ 
            msg: 'Todos os campos precisam ser preenchidos!',
            email: body.email,
            password: body.password
        });
    }

    let user = User.findOne({email: body.email},).then((user)=>{
        if(!user){
            return res.status(400).json({ msg: 'Email ou senha inválidos!' });
        }

        if(user.user_area.password !== body.password){
            return res.status(400).json({ msg: 'Email ou senha inválidos!' });
        }

        return res.send({
            status: 200,
            user: user.user_area.section_id
        });
    }).catch((err) => {
        return res.send("Erro: " + err);
    });
}