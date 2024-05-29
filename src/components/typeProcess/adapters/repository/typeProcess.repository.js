const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class TypeProcessRepository {
    insert = async (typeProcess) => {
        await prisma.typeProcess.create({ data: typeProcess });
    };
    list = async () => {
        return await prisma.typeProcess.findMany();
    };
    update = async (typeProcess) => {
        return await prisma.typeProcess.update({
            where: { id: typeProcess.id },
            data: typeDocument,
        });
    };
    delete = async (id) => {
        await prisma.typeProcess.delete.delete({
            where: {
                id: id,
            },
        });
    };
};