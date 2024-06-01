const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class TypeMunicipalityRepository {
  insert = async (typeMunicipality) => {
    await prisma.typeMunicipality.create({ data: typeMunicipality });
  };
  list = async () => {
    return await prisma.typeMunicipality.findMany();
  };
  update = async (typeMunicipality) => {
    return await prisma.typeMunicipality.update({
      where: { id: typeMunicipality.id },
      data: typeMunicipality,
    });
  };
  delete = async (id) => {
    await prisma.typeMunicipality.delete.delete({
      where: {
        id: id,
      },
    });
  };
};