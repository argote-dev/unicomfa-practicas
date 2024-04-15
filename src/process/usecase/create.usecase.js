const Process = require('../entity/process.entity');

module.exports = class CreateProcess {
    constructor(processRepository) {
        this.processRepository = processRepository;
    }

    async execute(process) {
        const { aproved, type_Process,status_ProcessId } = process;
        await this.processRepository.insert(
            new Process(aproved, type_Process,status_ProcessId),
        );
    }
};
