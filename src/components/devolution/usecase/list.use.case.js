module.exports = class CreateDevolution {
    constructor(devolutionRespository) {
        this.devolutionRespository = devolutionRespository;
    }

    async execute() {
        return await this.devolutionRespository.list();
    }
};
