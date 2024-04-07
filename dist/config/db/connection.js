"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const client_1 = require("@prisma/client");
exports.connection = new client_1.PrismaClient();
