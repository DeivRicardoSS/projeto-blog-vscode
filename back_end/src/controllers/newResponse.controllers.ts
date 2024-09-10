import mongoose from 'mongoose';
import RespostaSchema from '../database/respostas.database';

const Resposta = mongoose.model('Post', RespostaSchema);

export default function newResponse(req:any, res:any) {
    let id:string = req.body.id;
    let id_pai:string = req.body.id_pai;
    let id_dono:string = req.body.id_dono;
    let conteudo:string = req.body.conteudo;

    if(!id || !id_pai || !id_dono || !conteudo) {
        return res.status(400).json({
            msg: 'Todos os campos precisam ser preenchidos!'
        })
    }

    const NewResponse = new Resposta({
        id: id,
        id_pai: id_pai,
        id_dono: id_dono,
        conteudo: conteudo
    });

    NewResponse.save().then(() => {
        return res.send(NewResponse);
    }).catch((err) => {
        return res.send("Erro: " + err);
    })
}
