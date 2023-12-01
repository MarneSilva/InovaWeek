import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import ProjetoService from "../services/ProjetoService";

class ProjetoController{

    constructor(){}

    async createProjeto(req: Request, res: Response){
        const dados: Prisma.ProjetoCreateInput = req.body;
        
        if(dados.nome !== "0"){
            const newprojeto = await ProjetoService.createProjeto(dados)
            res.status(200).json({
                status: 'ok',
                newProjeto: newprojeto
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }

    async listProjeto(req: Request, res: Response){
        const projetos = await ProjetoService.listProjeto();

        res.render('projetos', {projetos: projetos})
    }

    async updateProjeto(req: Request, res: Response){
        try {
            const idProjeto = req.params.idProjeto;
            const data: Prisma.ProjetoUpdateInput = req.body;

            const projeto = await ProjetoService.updateProjeto(idProjeto, data);

            return res.json(projeto);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async deleteProjeto(req: Request, res: Response){
        try {
            const projetoDados: string = req.params.idProjeto;
            const projeto = await ProjetoService.deleteProjeto(projetoDados);

            return res.json(projeto);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
    }
}

export default new ProjetoController;