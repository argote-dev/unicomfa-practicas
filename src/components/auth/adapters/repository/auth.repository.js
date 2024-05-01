const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

module.exports = class AuthRepository {
  async login({ email, password }) {
    const user = await prisma.user.findFirst({ where: email });
    return await decryptPassword(password, user.password);
  }

  decryptPassword(entry, password) {
    return Promise((resolve, reject) => {
      bcrypt.compare(entry, password).then((error, result) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  }
};
