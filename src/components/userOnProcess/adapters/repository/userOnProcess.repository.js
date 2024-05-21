const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class UserOnProcessRepository {
  insert = async (userOnProcess) => {
    await prisma.userOnProcess.create({ data: userOnProcess });
  };
  list = async () => {
    return await prisma.userOnProcess.findMany();
  };
  update = async (userOnProcess) => {
    return await prisma.userOnProcess.update({
      where: { id: userOnProcess.id },
      data: userOnProcess,
    });
  };
  delete = async (id) => {
    await prisma.userOnProcess.delete.delete({
      where: {
        id: id,
      },
    });
  };
};
