/*
  Warnings:

  - Added the required column `idFaculty` to the `Program` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Faculty" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Program" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "idFaculty" INTEGER NOT NULL,
    CONSTRAINT "Program_idFaculty_fkey" FOREIGN KEY ("idFaculty") REFERENCES "Faculty" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Program" ("id", "name") SELECT "id", "name" FROM "Program";
DROP TABLE "Program";
ALTER TABLE "new_Program" RENAME TO "Program";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
