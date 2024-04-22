const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class AuthRepository {
  async login({ email, password }) {
    const user = await prisma.user.findFirst({ where: email });
    if (user.password === password) {
      return true;
    }

    return false;
  }
};
