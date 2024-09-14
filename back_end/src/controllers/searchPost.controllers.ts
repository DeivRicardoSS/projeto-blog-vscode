import mongoose from 'mongoose';
import PostSchema from '../database/posts.database';

const Post = mongoose.model('Post', PostSchema);

export default function searchPost(req, res) {
    const search:string = req.body.search;

    let post = Post.find({'titulo': search}).then((post)=>{
        return res.send({
            status: 200,
            search: search,
            result: post
        });
    }).catch((err) => {
        return res.send("Erro: " + err);
    });
}