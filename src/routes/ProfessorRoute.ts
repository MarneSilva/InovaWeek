import ProfessorController from "../controllers/ProfessorController";
import { Router } from "express";

const ProfessorRouter = Router();

ProfessorRouter.get('/professores', ProfessorController.listProfessor);

export default ProfessorRouter;