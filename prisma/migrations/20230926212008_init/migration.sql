/*
  Warnings:

  - You are about to drop the column `avaliacaoId` on the `Professor` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Professor" (
    "idProfessor" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_Professor" ("idProfessor", "nome") SELECT "idProfessor", "nome" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
