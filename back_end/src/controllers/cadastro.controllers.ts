// Importações
import mongoose from 'mongoose';
import Calc from '../core/calc.core.ts'
import UserSchema from '../database/users.database.ts';

// Definindo Coleção de Usuários
const User = mongoose.model('User', UserSchema);

export default function cadastro(req, res){
    const body = req.body;
    let nome:string = body.nome;
    let email:string = body.email;
    let nascimento:string = body.nascimento;
    let password:string = body.password;
        
    // Caso alguma entrada esteja vazia ou não exista
    if(!nome || !email || !nascimento || !password){
        return res.status(400).json({ 
            msg: 'Todos os campos precisam ser preenchidos!',
            nome: body.nome,
            email: body.email,
            nascimento: body.nascimento,
            password: body.password
        });
    }

    
    // Criando um id de sessão de usuário
    let section_id:string = Calc.newSectionId();
    

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
        return res.send(NewUser);
    }).catch((err) => {
        return res.send(err);
    });
}