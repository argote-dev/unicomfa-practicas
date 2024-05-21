module.exports = class DeleteUserOnProcess {
    constructor(userOnProcessRepository) {
        this.userOnProcessRepository = userOnProcessRepository;
    }

    async execute(id) {
        await this.userOnProcessRepository.delete(id);
    }
};
