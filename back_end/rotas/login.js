const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    const body = req.body;
    const email = body.email;
    const password = body.password;


});

modeule.exports = router;