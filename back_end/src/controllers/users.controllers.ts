import mongoose from 'mongoose';

import Calc from '../core/calc.core.ts'
import UserSchema from '../database/users.database.ts';
const User = mongoose.model('User', UserSchema);

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
    },
    login(req, res){
        const body = req.body;

        if(!body.email || !body.password){
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

        

    },
    user_section(req, res){
        const section = req.params.id;

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
}

export default Users;