-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "birth_date" DATETIME NOT NULL,
    "idProgram" INTEGER,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idCompamy" INTEGER,
    "idTypeDocument" INTEGER NOT NULL,
    "idTypeMunicipality" INTEGER NOT NULL,
    "idTypeUser" INTEGER NOT NULL,
    CONSTRAINT "User_idProgram_fkey" FOREIGN KEY ("idProgram") REFERENCES "Program" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "User_idCompamy_fkey" FOREIGN KEY ("idCompamy") REFERENCES "Company" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "User_idTypeDocument_fkey" FOREIGN KEY ("idTypeDocument") REFERENCES "TypeDocument" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_idTypeMunicipality_fkey" FOREIGN KEY ("idTypeMunicipality") REFERENCES "TypeMunicipality" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_idTypeUser_fkey" FOREIGN KEY ("idTypeUser") REFERENCES "TypeUser" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Document" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "typeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Document_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "TypeDocument" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Document_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TypeDocument" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Process" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "aproved" BOOLEAN NOT NULL,
    "typeId" INTEGER NOT NULL,
    "statusProcessId" INTEGER NOT NULL,
    CONSTRAINT "Process_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "TypeProcess" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Process_statusProcessId_fkey" FOREIGN KEY ("statusProcessId") REFERENCES "StatusProcess" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserOnProcess" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "processId" INTEGER NOT NULL,
    CONSTRAINT "UserOnProcess_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserOnProcess_processId_fkey" FOREIGN KEY ("processId") REFERENCES "Process" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TypeProcess" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Return" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "StatusProcess" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProcessOnReturn" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "processId" INTEGER NOT NULL,
    "returnId" INTEGER NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ProcessOnReturn_processId_fkey" FOREIGN KEY ("processId") REFERENCES "Process" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProcessOnReturn_returnId_fkey" FOREIGN KEY ("returnId") REFERENCES "Return" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Program" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "idFaculty" INTEGER NOT NULL,
    CONSTRAINT "Program_idFaculty_fkey" FOREIGN KEY ("idFaculty") REFERENCES "Faculty" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Faculty" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nit" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "date_association" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TypeUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TypeMunicipality" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "typedepartmentId" INTEGER NOT NULL,
    CONSTRAINT "TypeMunicipality_typedepartmentId_fkey" FOREIGN KEY ("typedepartmentId") REFERENCES "Typedepartment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Typedepartment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
