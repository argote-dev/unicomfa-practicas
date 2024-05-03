const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class DocumentsRepository {
    insert = async (documents) => {
        await prisma.documents.create({ data: documents });
    };
    list = async () => {
        return await prisma.documents.findMany();
    };
    update = async (documents) => {
        return await prisma.documents.update({
            where: { id: documents.id },
            data: documents,
        });
    };
    delete = async (id) => {
        await prisma.documents.delete.delete({
            where: {
                id: id,
            },
        });
    };
};
