const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const cc = await prisma.typeDocument.create({
    data: {
      name: 'CC',
    },
  });

  const ti = await prisma.typeDocument.create({
    data: {
      name: 'TI',
    },
  });

  const nit = await prisma.typeDocument.create({
    data: {
      name: 'NIT',
    },
  });

  const student = await prisma.typeUser.create({
    data: {
      name: 'Estudiante',
    },
  });

  const admin = await prisma.typeUser.create({
    data: {
      name: 'Administrador',
    },
  });

  const theacher = await prisma.typeUser.create({
    data: {
      name: 'Profesor',
    },
  });

  const businessman = await prisma.typeUser.create({
    data: {
      name: 'Empresario',
    },
  });

  const cauca = await prisma.typeDepartment.create({
    data: {
      name: 'Cauca',
    },
  });

  const popayan = await prisma.typeMunicipality.create({
    data: {
      name: 'Popayán',
      typeDepartmentId: 1,
    },
  });

  const userDefault = await prisma.user.create({
    data: {
      email: 'user@example.com',
      num_document: '1010123421',
      name: 'John',
      last_name: 'Doe',
      address: '123 Main St',
      birth_date: '1990-01-01',
      password: '123456',
      idTypeDocument: 1,
      idTypeMunicipality: 1,
      idTypeUser: 1,
    },
  });

  console.info({ cc, ti, nit, student, admin, theacher, businessman, popayan, cauca, userDefault });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
