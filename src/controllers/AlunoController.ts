import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import AlunoService from "../services/AlunoService";

class AlunoController{

    constructor(){}

    async createAluno(req: Request, res: Response){
        const dados: Prisma.AlunoCreateInput = req.body;
        
        if(dados.nome !== "" && dados.matricula !== ""){
            const newaluno = await AlunoService.createAluno(dados)
            res.status(200).json({
                status: 'ok',
                newAluno: newaluno
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }

    async listAluno(req: Request, res: Response){
        const alunos = await AlunoService.listAluno();

        res.render('alunos', {alunos: alunos})
        res.status(200).json({
            status: 'ok',
            alunos: alunos
        })
    }

    async updateAluno(req: Request, res: Response){
        res.send('Update Aluno');
    }

    async deleteAluno(req: Request, res: Response){
        res.send('Delete Aluno');
    }
}

export default new AlunoController;