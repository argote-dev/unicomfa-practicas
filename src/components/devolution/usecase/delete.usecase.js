module.exports = class DeleteDevoluiton {
    constructor(devolutionRespository) {
        this.devolutionRespository = devolutionRespository;
    }

    async execute(id) {
        await this.devolutionRespository.delete(id);
    }
};
