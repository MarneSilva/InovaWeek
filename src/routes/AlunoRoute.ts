import AlunoController from "../controllers/AlunoController";
import { Router } from "express";

const AlunoRouter = Router();

AlunoRouter.get('/alunos', AlunoController.listAluno);

export default AlunoRouter;