import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ProjetoService {
    constructor(){}

    async listProjeto(){
        try{
            const projetos = await prisma.projeto.findMany();
            return projetos;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createProjeto(projeto: Prisma.ProjetoCreateInput){
        try{
            const newprojeto = await prisma.projeto.create({
                data: projeto
            });
            return newprojeto;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateProjeto(idProjeto: string, projeto: Prisma.ProjetoUpdateInput){
        try{
            const updatedProjeto = await prisma.projeto.update({
                where: {
                    idProjeto
                },
                data: projeto
            });

            return updatedProjeto;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteProjeto(idProjeto: string){
        try{
            const deletedProjeto = await prisma.projeto.delete({
                where: {
                    idProjeto
                }
            });

            return deletedProjeto;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new ProjetoService();
