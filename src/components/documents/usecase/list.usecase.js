module.exports = class ListDocuments {
    constructor(documentsRepository) {
        this.documentsRepository = documentsRepository;
    }

    async execute() {
        return await this.documentsRepository.list();
    }
};
