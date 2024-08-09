import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';

import UserSchema from '../schemas/userSchema.mjs';

async function getUser(User, section_id, res) {
    if(!section_id){
        return res.status(400).json({
            msg: 'Todos os campos precisam ser preenchidos!',
            section_id: section_id
          });
    }

    const user = await User.findOne({ section_id: section_id });

    if(!user) {
        return res.status(400).json({ msg: 'Sessão inválida!' });
    }

    return res.json(user);
}

router.get('/', (req, res) => {
    const section_id = req.body.section_id;
    const User = mongoose.model('User', UserSchema);

    return getUser(User, section_id, res);

})

export default router;