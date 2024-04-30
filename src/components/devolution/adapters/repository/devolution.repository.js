const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class UserRepository {
    insert = async (devolution) => {
        await prisma.devolution.create({ data: devolution });
    };
    list = async () => {
        return await prisma.devolution.findMany();
    };
    update = async (devolution) => {
        return await prisma.devolution.update({
            where: { id: devolution.id },
            data: devolution,
        });
    };
    delete = async (id) => {
        await prisma.devolution.delete.delete({
            where: {
                id: id,
            },
        });
    };
};