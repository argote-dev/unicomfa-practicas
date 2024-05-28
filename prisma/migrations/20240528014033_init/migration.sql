-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "birth_date" TEXT NOT NULL,
    "token" TEXT,
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
INSERT INTO "new_User" ("address", "birth_date", "create_at", "email", "id", "idCompamy", "idProgram", "idTypeDocument", "idTypeMunicipality", "idTypeUser", "last_name", "name", "token") SELECT "address", "birth_date", "create_at", "email", "id", "idCompamy", "idProgram", "idTypeDocument", "idTypeMunicipality", "idTypeUser", "last_name", "name", "token" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
