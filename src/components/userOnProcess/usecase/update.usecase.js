module.exports = class UpdateUserOnProcess {
    constructor(userOnProcessRepository) {
        this.userOnProcessRepository = userOnProcessRepository;
    }

    async execute(userOnProcess) {
        await this.userOnProcessRepository.update(userOnProcess);
    }
};
