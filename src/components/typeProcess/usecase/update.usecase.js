module.exports = class UpdateTypeProcess {
    constructor(typeProcessRespository) {
        this.typeProcessRespository = typeProcessRespository;
    }

    async execute(typeProcess) {
        await this.typeProcessRespository.update(typeProcess);
    }
};
