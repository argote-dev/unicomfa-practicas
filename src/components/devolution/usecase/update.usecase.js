module.exports = class UpdateDevolution {
    constructor(devolutionRespository) {
        this.devolutionRespository = devolutionRespository;
    }

    async execute(devolution) {
        await this.devolutionRespository.update(devolution);
    }
};
