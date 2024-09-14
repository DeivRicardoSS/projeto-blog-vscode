import mongoose from 'mongoose';
import PostSchema from '../database/posts.database';

const Post = mongoose.model('Post', PostSchema);

export default function filterPost(req, res) {
    const categorias:[String] = req.body.categorias;

    let post = Post.find({'categorias': {$in categorias}}).then((post) => {
        return res.send({
            status: 200,
            categorias: categorias,
            result: post
        })
    }).catch((err) => {
        return res.send("Erro: " + err);
    })
}