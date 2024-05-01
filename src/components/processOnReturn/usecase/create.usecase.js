const ProcessOnReturn = require('../entity/processOnReturn.entity');

module.exports = class CreateProcessOnReturn {
    constructor(processOnReturnRepository) {
        this.processOnReturnRepository = processOnReturnRepository;
    }

    async execute(processOnReturnRepository) {
        const { process_Id, return_Id } = processOnReturnRepository;
        await this.processOnReturnRepository.insert(
            new ProcessOnReturn(process_Id, return_Id),
        );
    }
};
