-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "idAvaliacao" TEXT NOT NULL PRIMARY KEY,
    "professorId" TEXT,
    "alunoId" TEXT,
    "notaFinal" TEXT NOT NULL,
    "maturidade" TEXT NOT NULL,
    "inovacao" TEXT NOT NULL,
    "apresentacao" TEXT NOT NULL,
    "atratividade" TEXT NOT NULL,
    CONSTRAINT "Avaliacao_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor" ("idProfessor") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("matricula") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("alunoId", "apresentacao", "atratividade", "idAvaliacao", "inovacao", "maturidade", "notaFinal", "professorId") SELECT "alunoId", "apresentacao", "atratividade", "idAvaliacao", "inovacao", "maturidade", "notaFinal", "professorId" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
