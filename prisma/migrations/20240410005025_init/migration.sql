/*
  Warnings:

  - You are about to drop the column `aprovado` on the `Process` table. All the data in the column will be lost.
  - Added the required column `aproved` to the `Process` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Process" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "aproved" BOOLEAN NOT NULL,
    "typeId" INTEGER NOT NULL,
    "statusProcessId" INTEGER NOT NULL,
    CONSTRAINT "Process_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "TypeProcess" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Process_statusProcessId_fkey" FOREIGN KEY ("statusProcessId") REFERENCES "StatusProcess" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Process" ("id", "statusProcessId", "typeId") SELECT "id", "statusProcessId", "typeId" FROM "Process";
DROP TABLE "Process";
ALTER TABLE "new_Process" RENAME TO "Process";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
