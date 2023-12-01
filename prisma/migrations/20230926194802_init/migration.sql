/*
  Warnings:

  - You are about to drop the column `liderGrupoId` on the `Aluno` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Aluno" (
    "matricula" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "grupoId" TEXT NOT NULL,
    "lider" BOOLEAN,
    CONSTRAINT "Aluno_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo" ("idGrupo") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Aluno" ("grupoId", "matricula", "nome") SELECT "grupoId", "matricula", "nome" FROM "Aluno";
DROP TABLE "Aluno";
ALTER TABLE "new_Aluno" RENAME TO "Aluno";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
