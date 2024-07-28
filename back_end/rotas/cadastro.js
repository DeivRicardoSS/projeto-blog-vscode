const express = require('express');
const router = express.Router();

const sistema = {
    newSectionId(){
        //calma menor

        let caracteres = "abcdefghijklmnopqrstuvwxyz0123456789";
        

        let parte1 = "aaaaa";
        let parte2 = "bbbbb";
        let parte3 = "ccccc";
        let parte4 = "ddddd";

        let vez = "letra";
        for (let i = 0; i < parte1.length; i++) {
            parte1[i] = caracteres[this.random(0, (caracteres.length - 1))];
            parte2[i] = caracteres[this.random(0, (caracteres.length - 1))];
            parte3[i] = caracteres[this.random(0, (caracteres.length - 1))];
            parte4[i] = caracteres[this.random(0, (caracteress.length - 1))];
                 
        }

        return parte1 +"-"+ parte2 +"-"+ parte3 +"-"+ parte4
    },
    random(min, max){
        //retornar numero inteiro entre o mínimo e o maximo

        return Math.floor(Math.random() * (max - min) + min)
    }
}

const user_area = new mongoose.Schema({
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
        type: user_area,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);

//pega valores do body
router.push('/', (req, res) => {
    const body = req.body;

    let section_id = sistema.newSectionId();
    //buscar no banco de dados se o section_id ja existe

    while(User.findOne({user_area: {section_id: section_id}})){
        section_id = sistema.newSectionId();
    }

    const user = new User({
        nome: body.nome,
        email: body.email,
        nascimento: body.nascimento,
        permissoes: ["perm1"],
        user_area: {
            section_id: section_id,
            password: body.password
        }
    });
    user.save().then(() => {
        res.send(user);
    }).catch((err) => {
        res.send(err);
    });
    
});

module.exports = router;