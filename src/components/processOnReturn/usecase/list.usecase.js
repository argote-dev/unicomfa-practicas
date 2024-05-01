module.exports = class CreateProcessOnReturn {
    constructor(processOnReturnRepository) {
        this.processOnReturnRepository = processOnReturnRepository;
    }

    async execute() {
        return await this.processOnReturnRepository.list();
    }
};
