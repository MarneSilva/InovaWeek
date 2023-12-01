import AvaliacaoController from "../controllers/AvaliacaoController";
import { Router } from "express";

const AvaliacaoRouter = Router();

AvaliacaoRouter.get('/avaliacoes', AvaliacaoController.listAvaliacao);

AvaliacaoRouter.post("/avaliacoes/create", AvaliacaoController.createAvaliacao);

AvaliacaoRouter.delete("/avaliacoes/delete/:idAvaliacao", AvaliacaoController.deleteAvaliacao);

export default AvaliacaoRouter;