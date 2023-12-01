import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import AvaliacaoService from "../services/AvaliacaoService";

class AvaliacaoController{

    constructor(){}

    async createAvaliacao(req: Request, res: Response){
        const dados: Prisma.AvaliacaoCreateInput = req.body;
        
        if(dados.idAvaliacao !== "0"){
            const newavaliacao = await AvaliacaoService.createAvaliacao(dados)
            res.status(200).json({
                status: 'ok',
                newavaliacao: newavaliacao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }

    async listAvaliacao(req: Request, res: Response){
        const avaliacoes = await AvaliacaoService.listAvaliacao();

        res.render('avaliacoes', {avaliacoes: avaliacoes})
        res.status(200).json({
            status: 'ok',
            avaliacoes: avaliacoes
        })
    }

    async updateAvaliacao(req: Request, res: Response){
        res.send('Update Avaliacao');
    }

    async deleteAvaliacao(req: Request, res: Response){
        res.send('Delete Avaliacao');
    }
}

export default new AvaliacaoController;