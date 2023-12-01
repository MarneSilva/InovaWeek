import ProjetoController from "../controllers/ProjetoController";
import { Router } from "express";

const ProjetoRouter = Router();

ProjetoRouter.get('/projetos', ProjetoController.listProjeto);

export default ProjetoRouter;