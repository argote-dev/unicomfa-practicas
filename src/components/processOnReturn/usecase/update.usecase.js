
module.exports = class updateProcessOnReturn {
    constructor(processOnReturnRespository) {
        this.processOnReturnRespository = processOnReturnRespository;
    }

    async execute(procesOnReturn) {
        await this.processOnReturnRespository.update(procesOnReturn);
    }
};
