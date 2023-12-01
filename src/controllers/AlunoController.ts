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
                newaluno: newaluno
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
    }

    async updateAluno(req: Request, res: Response){
        try {
            const matricula = req.params.matricula;
            const data: Prisma.AlunoUpdateInput = req.body;
            console.log("Nice");

            const aluno = await AlunoService.updateAluno(matricula, data);

            return res.json(aluno);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async deleteAluno(req: Request, res: Response){
        try {
            const alunoDados: string = req.params.matricula;
            const aluno = await AlunoService.deleteAluno(alunoDados);

            return res.json(aluno);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
    }
}

export default new AlunoController;