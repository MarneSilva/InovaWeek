import ProjetoController from "../controllers/ProjetoController";
import { Router } from "express";

const ProjetoRouter = Router();

ProjetoRouter.get('/projetos', ProjetoController.listProjeto);

ProjetoRouter.post("/projetos/create", ProjetoController.createProjeto);

ProjetoRouter.delete("/projetos/delete/:idProjeto", ProjetoController.deleteProjeto);

export default ProjetoRouter;