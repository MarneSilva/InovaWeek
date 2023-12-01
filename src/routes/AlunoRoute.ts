import AlunoController from "../controllers/AlunoController";
import { Router } from "express";

const AlunoRouter = Router();

AlunoRouter.get('/alunos', AlunoController.listAluno);

AlunoRouter.post("/aluno/create", AlunoController.createAluno);

AlunoRouter.delete("/aluno/delete/:matricula", AlunoController.deleteAluno);

export default AlunoRouter;