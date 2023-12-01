import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AvaliacaoService {
    constructor(){}

    async listAvaliacao(){
        try{
            const avaliacoes = await prisma.avaliacao.findMany();
            return avaliacoes;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createAvaliacao(avaliacao: Prisma.AvaliacaoCreateInput){
        try{
            const newAvaliacao = await prisma.avaliacao.create({
                data: avaliacao
            });
            return newAvaliacao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateAvaliacao(idAvaliacao: string, avaliacao: Prisma.AvaliacaoUpdateInput){
        try{
            const updatedAvaliacao = await prisma.avaliacao.update({
                where: {
                    idAvaliacao
                },
                data: avaliacao
            });

            return updatedAvaliacao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteAvaliacao(idAvaliacao: string){
        try{
            const deletedAvaliacao = await prisma.avaliacao.delete({
                where: {
                    idAvaliacao
                }
            });

            return deletedAvaliacao;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new AvaliacaoService();
