const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class TypeUserRepository {
  insert = async (typeUser) => {
    await prisma.typeUser.create({ data: typeUser });
  };
  list = async () => {
    return await prisma.typeUser.findMany();
  };
  update = async (typeUser) => {
    return await prisma.typeUser.update({
      where: { id: typeUser.id },
      data: typeUser,
    });
  };
  delete = async (id) => {
    await prisma.typeUser.delete.delete({
      where: {
        id: id,
      },
    });
  };
};