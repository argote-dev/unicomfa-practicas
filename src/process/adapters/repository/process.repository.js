const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class ProcessRepository {
    insert = async (process) => {
      await prisma.process.create({ data: process });
    };
    list = async () => {
      return await prisma.process.findMany();
    };
    update = async (process) => {
      return await prisma.process.update({
        where: { id: process.id },
        data: process,
      });
    };
    delete = async (id) => {
      await prisma.process.delete.delete({
        where: {
          id: id,
        },
      });
    };
  };