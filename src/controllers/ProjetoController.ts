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
        res.status(200).json({
            status: 'ok',
            Projetos: projetos
        })
    }

    async updateProjeto(req: Request, res: Response){
        res.send('Update projeto');
    }

    async deleteProjeto(req: Request, res: Response){
        res.send('Delete projeto');
    }
}

export default new ProjetoController;