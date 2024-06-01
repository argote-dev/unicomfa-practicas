const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class TypeDepartmentRepository {
  insert = async (typeDepartament) => {
    await prisma.typeDepartment.create({ data: typeDepartament });
  };
  list = async () => {
    return await prisma.typeDepartment.findMany();
  };
  update = async (typeDepartament) => {
    return await prisma.typeDepartment.update({
      where: { id: typeDepartament.id },
      data: typeDepartament,
    });
  };
  delete = async (id) => {
    await prisma.typeDepartment.delete.delete({
      where: {
        id: id,
      },
    });
  };
};
