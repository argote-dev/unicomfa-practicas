module.exports = class DeleteProcessOnReturn {
    constructor(procesOnReturnRespository) {
        this.procesOnReturnRespository = procesOnReturnRespository;
    }

    async execute(id) {
        await this.procesOnReturnRespository.delete(id);
    }
};
