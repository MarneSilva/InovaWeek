import GrupoController from "../controllers/GrupoController";
import { Router } from "express";

const GrupoRouter = Router();

GrupoRouter.get('/grupos', GrupoController.listGrupo);

GrupoRouter.post("/grupos/create", GrupoController.createGrupo);

GrupoRouter.delete("/grupos/delete/:idGrupo", GrupoController.deleteGrupo);

export default GrupoRouter;