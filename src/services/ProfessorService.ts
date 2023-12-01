import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ProfessorService {
    constructor(){}

    async listProfessor(){
        try{
            const professores = await prisma.professor.findMany();
            return professores;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createProfessor(professor: Prisma.ProfessorCreateInput){
        try{
            const newProfessor = await prisma.professor.create({
                data: professor
            });
            return newProfessor;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateProfessor(idProfessor: string, professor: Prisma.ProfessorUpdateInput){
        try{
            const updatedProfessor = await prisma.professor.update({
                where: {
                    idProfessor
                },
                data: professor
            });

            return updatedProfessor;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteProfessor(idProfessor: string){
        try{
            const deletedProfessor = await prisma.professor.delete({
                where: {
                    idProfessor
                }
            });

            return deletedProfessor;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new ProfessorService();
