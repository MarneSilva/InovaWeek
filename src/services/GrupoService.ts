import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class GrupoService {
    constructor(){}

    async listGrupo(){
        try{
            const grupos = await prisma.grupo.findMany();
            return grupos;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createGrupo(grupo: Prisma.GrupoCreateInput){
        try{
            const newGrupo = await prisma.grupo.create({
                data: grupo
            });
            return newGrupo;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateGrupo(idGrupo: string, grupo: Prisma.GrupoUpdateInput){
        try{
            const updatedGrupo = await prisma.grupo.update({
                where: {
                   idGrupo
                },
                data: grupo
            });

            return updatedGrupo;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteGrupo(idGrupo: string){
        try{
            const deletedGrupo = await prisma.grupo.delete({
                where: {
                    idGrupo
                }
            });

            return deletedGrupo;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new GrupoService();
