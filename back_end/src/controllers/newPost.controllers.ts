import mongoose from 'mongoose';
import PostSchema from '../database/posts.database';

const Post = mongoose.model('Post', PostSchema);


export default function newPost(req, res){
    const body = req.body;

    let id:string = body.id;
    let id_dono:string = body.id_dono;
    let cor:[string] = body.cor;
    let titulo:string = body.titulo;
    let subtitulo:string = body.subtitulo;
    let conteudo:string = body.conteudo;
    let categorias:[string] = body.categorias;

    if(!id || !id_dono || !cor || !titulo || !subtitulo || !conteudo || !categorias){
        return res.status(400).json({
            msg: 'Todos os campos precisam ser preenchidos!'
        });
    }

    const NewPost = new Post({
        id: id,
        id_dono: id_dono,
        cor: cor,
        titulo: titulo,
        subtitulo: subtitulo,
        conteudo: conteudo,
        categorias: categorias,
        views: 0
    });

    NewPost.save().then(() => {
        return res.send(NewPost);
    }).catch((err) =>{
        return res.send(err);
    })
}