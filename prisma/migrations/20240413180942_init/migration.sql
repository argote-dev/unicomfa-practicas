-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "birth_date" TEXT NOT NULL,
    "idProgram" INTEGER,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "User_idProgram_fkey" FOREIGN KEY ("idProgram") REFERENCES "Program" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("address", "birth_date", "create_at", "email", "id", "idProgram", "last_name", "name") SELECT "address", "birth_date", "create_at", "email", "id", "idProgram", "last_name", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
