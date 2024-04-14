/*
  Warnings:

  - You are about to drop the column `typedepartmentId` on the `TypeMunicipality` table. All the data in the column will be lost.
  - Added the required column `typeDepartmentId` to the `TypeMunicipality` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TypeMunicipality" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "typeDepartmentId" INTEGER NOT NULL,
    CONSTRAINT "TypeMunicipality_typeDepartmentId_fkey" FOREIGN KEY ("typeDepartmentId") REFERENCES "TypeDepartment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TypeMunicipality" ("id", "name") SELECT "id", "name" FROM "TypeMunicipality";
DROP TABLE "TypeMunicipality";
ALTER TABLE "new_TypeMunicipality" RENAME TO "TypeMunicipality";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
