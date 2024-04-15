module.exports = class CreateProcess {
    constructor(processRepository) {
        this.processRepository = processRepository;
    }

    async execute() {
        return await this.processRepository.list();
    }
};
