import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import ProfessorService from "../services/ProfessorService";

class ProfessorController{

    constructor(){}

    async createProfessor(req: Request, res: Response){
        const dados: Prisma.ProfessorCreateInput = req.body;
        
        if(dados.nome !== "0"){
            const newprofessor = await ProfessorService.createProfessor(dados)
            res.status(200).json({
                status: 'ok',
                newProfessor: newprofessor
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }

    async listProfessor(req: Request, res: Response){
        const professores = await ProfessorService.listProfessor();

        res.render('professores', {professores: professores})
    }

    async updateProfessor(req: Request, res: Response){
        res.send('Update Professor');
    }

    async deleteProfessor(req: Request, res: Response){
        try {
            const professorDados: string = req.params.idProfessor;
            const professor = await ProfessorService.deleteProfessor(professorDados);

            return res.json(professor);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
    }
}

export default new ProfessorController;