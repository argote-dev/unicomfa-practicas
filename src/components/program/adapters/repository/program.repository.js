const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class ProgramRepository {
  insert = async (program) => {
    await prisma.program.create({ data: program });
  };
  list = async () => {
    return await prisma.program.findMany();
  };
  update = async (program) => {
    return await prisma.program.update({
      where: { id: program.id },
      data: program,
    });
  };
  delete = async (id) => {
    await prisma.program.delete.delete({
      where: {
        id: id,
      },
    });
  };
};
