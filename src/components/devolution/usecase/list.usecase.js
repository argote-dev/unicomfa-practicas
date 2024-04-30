module.exports = class ListDevolution {
    constructor(devolutionRespository) {
        this.devolutionRespository = devolutionRespository;
    }

    async execute() {
        return await this.devolutionRespository.list();
    }
};
