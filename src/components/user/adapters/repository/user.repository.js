const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class UserRepository {
  insert = async (user) => {
    await prisma.user.create({ data: user });
  };
  list = async () => {
    return await prisma.user.findAny();
  };
  update = async (user) => {
    return await prisma.user.update({
      where: { id: user.id },
      data: user,
    });
  };
  delete = async (id) => {
    await prisma.user.delete.delete({
      where: {
        id: id,
      },
    });
  };
};
