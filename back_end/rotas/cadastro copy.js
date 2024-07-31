const express = require('express');
const router = express.Router();



const User = mongoose.model('User', UserSchema);


//rota get com id no na rota



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