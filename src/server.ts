import express from 'express';
import MainRouter from './routes/MainRoutes';
import AlunoRouter from './routes/AlunoRoute';
import AvaliacaoRouter from './routes/AvaliacaoRoute';
import GrupoRouter from './routes/GrupoRoute';
import ProfessorRouter from './routes/ProfessorRoute';
import ProjetoRouter from './routes/ProjetoRoute';

const app = express();
const port = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(AlunoRouter);
app.use(MainRouter);
app.use(AvaliacaoRouter);
app.use(GrupoRouter);
app.use(ProfessorRouter);
app.use(ProjetoRouter);

app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})