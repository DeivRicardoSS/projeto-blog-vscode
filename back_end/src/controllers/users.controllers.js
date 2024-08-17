import mongoose from 'mongoose';

import Calc from '../core/calc.core.js'
import UserSchema from '../database/users.database.js';

const Users = {
    cadastro(req, res){
        const body = req.body;

        if(!body.nome || !body.email || !body.nascimento || !body.password){
            return res.status(400).json({ 
                msg: 'Todos os campos precisam ser preenchidos!',
                nome: body.nome,
                email: body.email,
                nascimento: body.nascimento,
                password: body.password
            });
        }

        const User = mongoose.model('User', UserSchema);

        let section_id = Calc.newSectionId();
        

        const NewUser = new User({
            nome: body.nome,
            foto: "http://localhost:3000/cadastro/img/default",
            data_criacao: Date.now(),
            email: body.email,
            nascimento: body.nascimento,
            permissoes: ["perm1"],
            user_area: {
                section_id: section_id,
                password: body.password
            }
            
        });

        NewUser.save().then(() => {
            return res.send(NewUser);
        }).catch((err) => {
            return res.send(err);
        });
    }
}

export default Users;