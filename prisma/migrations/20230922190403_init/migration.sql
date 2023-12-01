-- CreateTable
CREATE TABLE "Aluno" (
    "nome" TEXT NOT NULL,
    "matricula" TEXT NOT NULL PRIMARY KEY,
    "grupoId" TEXT NOT NULL,
    CONSTRAINT "Aluno_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo" ("idGrupo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Grupo" (
    "idGrupo" TEXT NOT NULL PRIMARY KEY,
    "projetoId" TEXT NOT NULL,
    CONSTRAINT "Grupo_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "Projeto" ("idProjeto") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Projeto" (
    "idProjeto" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Professor" (
    "idProfessor" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "idAvaliacao" TEXT NOT NULL PRIMARY KEY,
    "notaId" TEXT NOT NULL,
    "critica" TEXT,
    "alunoId" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,
    CONSTRAINT "Avaliacao_notaId_fkey" FOREIGN KEY ("notaId") REFERENCES "NotaCriterio" ("idNota") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("matricula") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor" ("idProfessor") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "NotaCriterio" (
    "idNota" TEXT NOT NULL PRIMARY KEY,
    "notaFinal" REAL NOT NULL,
    "maturidade" REAL NOT NULL,
    "inovacao" REAL NOT NULL,
    "atratividade" REAL NOT NULL,
    "apresentacao" REAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_grupoId_key" ON "Aluno"("grupoId");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_projetoId_key" ON "Grupo"("projetoId");

-- CreateIndex
CREATE UNIQUE INDEX "Avaliacao_notaId_key" ON "Avaliacao"("notaId");
