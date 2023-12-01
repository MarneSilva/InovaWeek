import ProfessorController from "../controllers/ProfessorController";
import { Router } from "express";

const ProfessorRouter = Router();

ProfessorRouter.get('/professores', ProfessorController.listProfessor);

ProfessorRouter.post("/professores/create", ProfessorController.createProfessor);

ProfessorRouter.delete("/professores/delete/:idProfessor", ProfessorController.deleteProfessor);

export default ProfessorRouter;