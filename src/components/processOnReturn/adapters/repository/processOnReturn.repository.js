const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = class ProcessOnReturn {
    insert = async (processOnReturn) => {
      await prisma.processOnReturn.create({ data: processOnReturn });
    };
    
    list = async () => {
      return await prisma.processOnReturn.findMany();
    };    
      
    update = async (processOnReturn) => {
      return await prisma.processOnReturn.update({
        where: { id: processOnReturn.id },
        data: processOnReturn,
      });
    };
    delete = async (id) => {
      await prisma.processOnReturn.delete.delete({
        where: {
          id: id,
        },
      });
    };
  };
