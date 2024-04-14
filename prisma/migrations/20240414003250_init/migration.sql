/*
  Warnings:

  - You are about to drop the `Typedepartment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Typedepartment";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "TypeDepartment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TypeMunicipality" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "typedepartmentId" INTEGER NOT NULL,
    CONSTRAINT "TypeMunicipality_typedepartmentId_fkey" FOREIGN KEY ("typedepartmentId") REFERENCES "TypeDepartment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TypeMunicipality" ("id", "name", "typedepartmentId") SELECT "id", "name", "typedepartmentId" FROM "TypeMunicipality";
DROP TABLE "TypeMunicipality";
ALTER TABLE "new_TypeMunicipality" RENAME TO "TypeMunicipality";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
