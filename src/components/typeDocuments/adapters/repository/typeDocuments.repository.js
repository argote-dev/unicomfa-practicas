const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class TypeDocumentsRepository {
  insert = async (typeDocument) => {
    await prisma.typeDocument.create({ data: typeDocument });
  };
  list = async () => {
    return await prisma.typeDocument.findMany();
  };
  update = async (typeDocument) => {
    return await prisma.typeDocument.update({
      where: { id: typeDocument.id },
      data: typeDocument,
    });
  };
  delete = async (id) => {
    await prisma.typeDocument.delete.delete({
      where: {
        id: id,
      },
    });
  };
};
