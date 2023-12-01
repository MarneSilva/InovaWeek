import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import GrupoService from "../services/GrupoService";

class GrupoController{

    constructor(){}

    async createGrupo(req: Request, res: Response){
        const dados: Prisma.GrupoCreateInput = req.body;
        
        if(dados.idGrupo !== "0"){
            const newgrupo = await GrupoService.createGrupo(dados)
            res.status(200).json({
                status: 'ok',
                newgrupo: newgrupo
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }

    async listGrupo(req: Request, res: Response){
        const grupos = await GrupoService.listGrupo();

        res.render('grupos', {grupos: grupos})
        res.status(200).json({
            status: 'ok',
            grupos: grupos
        })
    }

    async updateGrupo(req: Request, res: Response){
        res.send('Update Grupo');
    }

    async deleteGrupo(req: Request, res: Response){
        res.send('Delete Grupo');
    }
}

export default new GrupoController;