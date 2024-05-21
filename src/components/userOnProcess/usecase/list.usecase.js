module.exports = class ListUserOnProcess {
    constructor(userOnProcessRepository) {
        this.userOnProcessRepository = userOnProcessRepository;
    }

    async execute() {
        return await this.userOnProcessRepository.list();
    }
};
