const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class DevolutionRepository {
  insert = async (devolution) => {
    await prisma.return.create({ data: devolution });
  };
  list = async () => {
    return await prisma.return.findMany();
  };
  update = async (devolution) => {
    return await prisma.return.update({
      where: { id: devolution.id },
      data: devolution,
    });
  };
  delete = async (id) => {
    await prisma.return.deleteMany({
      where: {
        id: id,
      },
    });
  };
};
