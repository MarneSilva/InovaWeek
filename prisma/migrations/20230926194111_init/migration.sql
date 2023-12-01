-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projeto" (
    "idProjeto" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_Projeto" ("data", "idProjeto", "nome") SELECT "data", "idProjeto", "nome" FROM "Projeto";
DROP TABLE "Projeto";
ALTER TABLE "new_Projeto" RENAME TO "Projeto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
