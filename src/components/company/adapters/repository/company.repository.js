const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class CompanyRepository {
    insert = async (company) => {
        await prisma.company.create({ data: company });
    };
    list = async () => {
        return await prisma.company.findMany();
    };
    update = async (company) => {
        return await prisma.company.update({
            where: { id: company.id },
            data: company,
        });
    };
    delete = async (id) => {
        await prisma.company.delete.delete({
            where: {
                id: id,
            },
        });
    };
};
