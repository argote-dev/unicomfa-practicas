const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class ProcessRepository {
  async insert(process) {
    await prisma.process.create({ date: process });
  }
  async list() {
    return await prisma.process.findMany();
  }
  async get(id) {
    return await prisma.process.findUnique({ id: id });
  }
  async update(process) {
    await prisma.process.update({
      where: { id: process.id },
      data: process,
    });
  }
  async delete(id) {
    await prisma.process.delete({
      where: {
        id: id,
      },
    });
  }
};
