/*
  Warnings:

  - You are about to drop the `NotaCriterio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `critica` on the `Avaliacao` table. All the data in the column will be lost.
  - You are about to drop the column `notaId` on the `Avaliacao` table. All the data in the column will be lost.
  - Added the required column `avaliacaoId` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `apresentacao` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atratividade` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inovacao` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maturidade` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notaFinal` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Aluno_grupoId_key";

-- AlterTable
ALTER TABLE "Aluno" ADD COLUMN "liderGrupoId" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "NotaCriterio";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Professor" (
    "idProfessor" TEXT NOT NULL PRIMARY KEY,
    "avaliacaoId" TEXT NOT NULL,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_Professor" ("idProfessor", "nome") SELECT "idProfessor", "nome" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
CREATE TABLE "new_Avaliacao" (
    "idAvaliacao" TEXT NOT NULL PRIMARY KEY,
    "professorId" TEXT,
    "alunoId" TEXT,
    "notaFinal" REAL NOT NULL,
    "maturidade" REAL NOT NULL,
    "inovacao" REAL NOT NULL,
    "apresentacao" REAL NOT NULL,
    "atratividade" REAL NOT NULL,
    CONSTRAINT "Avaliacao_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor" ("idProfessor") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("matricula") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("alunoId", "idAvaliacao", "professorId") SELECT "alunoId", "idAvaliacao", "professorId" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
