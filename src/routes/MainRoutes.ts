import { Router } from "express";
import MainController from "../controllers/MainController";

const MainRouter = Router();
MainRouter.get('/', MainController.renderMainPage);

//MainRouter.get('/', function(req: Request, res: Response){
//    res.sendFile(path.join(__dirname) + '../views/index.html');
//});

export default MainRouter;