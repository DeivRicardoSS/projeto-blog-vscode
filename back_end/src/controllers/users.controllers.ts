import mongoose from 'mongoose';

import Calc from '../core/calc.core'
import UserSchema from '../database/users.database';

const Users = {
    cadastro: (req, res) => {
        const { nome, email, nascimento, password } = req.body;

        if(!nome || !email || !nascimento || !password){
            return res.status(400).json({ 
                msg: 'Todos os campos precisam ser preenchidos!',
                nome: nome,
                email: email,
                nascimento: nascimento,
                password: password
            });
        }

        const User = mongoose.model('User', UserSchema);

        let section_id = Calc.newSectionId();
        

        const NewUser = new User({
            nome: nome,
            foto: "http://localhost:3000/cadastro/img/default",
            data_criacao: Date.now(),
            email: email,
            nascimento: nascimento,
            permissoes: ["perm1"],
            user_area: {
                section_id: section_id,
                password: password
            }
            
        });

        NewUser.save().then(() => {
            res.send(NewUser);
        }).catch((err) => {
            res.send(err);
        });
    }
}