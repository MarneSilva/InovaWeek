import GrupoController from "../controllers/GrupoController";
import { Router } from "express";

const GrupoRouter = Router();

GrupoRouter.get('/grupos', GrupoController.listGrupo);

export default GrupoRouter;