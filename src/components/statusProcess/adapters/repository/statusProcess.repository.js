const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class StatusProcessRepository {
  insert = async (statusProcess) => {
    await prisma.statusProcess.create({ data: statusProcess });
  };
  list = async () => {
    return await prisma.statusProcess.findMany();
  };
  update = async (statusProcess) => {
    return await prisma.statusProcess.update({
      where: { id: statusProcess.id },
      data: statusProcess,
    });
  };
  delete = async (id) => {
    await prisma.statusProcess.delete.delete({
      where: {
        id: id,
      },
    });
  };
};
