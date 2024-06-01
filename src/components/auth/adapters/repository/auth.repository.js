const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();
const secret = process.env.SECRET_JWT;

async function decryptPassword(entry, password) {
  return await bcrypt.compare(entry, password);
}

async function getUserByEmail(param) {
  return await prisma.user.findUnique({
    where: {
      email: param,
    },
  });
}

async function updateToken(emain, token) {
  await prisma.user.update({
    where: {
      email: emain,
    },
    data: {
      token: token,
    },
  });
}

module.exports = class AuthRepository {
  constructor() {
    this.login = this.login.bind(this);
  }

  login({ email, password }) {
    return new Promise(async (resolve, reject) => {
      const user = await getUserByEmail(email);

      if (user === null) {
        reject(Error('User not found.'));
        return;
      }

      if (await decryptPassword(password, user.password)) {
        const token = jwt.sign({ email: user.email, role: user.idTypeUser }, secret, { expiresIn: '8h' });
        await updateToken(email, token);
        resolve(token);
      } else {
        reject(Error('User or password not found.'));
      }
    });
  }
};
