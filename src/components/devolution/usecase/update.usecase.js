module.exports = class DeleteDevolution {
    constructor(devolutionRespository) {
        this.devolutionRespository = devolutionRespository;
    }

    async execute(devolution) {
        await this.devolutionRespository.update(devolution);
    }
};
