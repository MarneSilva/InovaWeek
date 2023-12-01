import AvaliacaoController from "../controllers/AvaliacaoController";
import { Router } from "express";

const AvaliacaoRouter = Router();

AvaliacaoRouter.get('/avaliacoes', AvaliacaoController.listAvaliacao);

export default AvaliacaoRouter;