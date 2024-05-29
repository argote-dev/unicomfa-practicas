const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class FacultyRepository {
    insert = async (faculty) => {
        await prisma.faculty.create({ data: faculty });
    };
    list = async () => {
        return await prisma.faculty.findMany();
    };
    update = async (faculty) => {
        return await prisma.faculty.update({
            where: { id: faculty.id },
            data: faculty,
        });
    };
    delete = async (id) => {
        await prisma.faculty.delete.delete({
            where: {
                id: id,
            },
        });
    };
};