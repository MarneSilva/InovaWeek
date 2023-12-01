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
    }

    async updateAvaliacao(req: Request, res: Response){
        try {
            const idAvaliacao = req.params.idAvaliacao;
            const data: Prisma.AvaliacaoUpdateInput = req.body;

            const avaliacao = await AvaliacaoService.updateAvaliacao(idAvaliacao, data);

            return res.json(avaliacao);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async deleteAvaliacao(req: Request, res: Response){
        try {
            const avaliacaoDados: string = req.params.idAvaliacao;
            const avaliacao = await AvaliacaoService.deleteAvaliacao(avaliacaoDados);
            console.log(avaliacaoDados)

            return res.json(avaliacao);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
    }
}

export default new AvaliacaoController;