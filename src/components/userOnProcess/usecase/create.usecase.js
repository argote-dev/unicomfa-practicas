const ProcessOnReturn = require('../entity/userOnProcess.entity');

module.exports = class CreateUserOnProcess {
    constructor(userOnProcessRepository) {
        this.userOnProcessRepository = userOnProcessRepository;
    }

    async execute(userOnProcessRepository) {
        const { userId, processId } = userOnProcessRepository;
        await this.userOnProcessRepository.insert(
            new ProcessOnReturn(userId, processId),
        );
    }
};
