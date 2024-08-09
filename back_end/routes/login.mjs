import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';

import UserSchema from '../schemas/userSchema.mjs';

async function getUser(User, email, password, res) {
    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(400).json({ msg: 'Email ou senha inválidos!' });
    }

    if (user.password !== password) {
        return res.status(400).json({ msg: 'Email ou senha inválidos!' });
    }

    if (user.password === password) {
        return res.json({
            email: user.email,
            section_id: user.section_id,
            logado: true
        });
    }
}

router.get('/', (req, res) => {
    const body = req.body;
    const email = body.email;
    const password = body.password;

    const User = mongoose.model('User', UserSchema);

    return getUser(User, email, password, res);

});

export default router;