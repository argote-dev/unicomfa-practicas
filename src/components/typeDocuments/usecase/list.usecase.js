module.exports = class ListTypeDocuments {
    constructor(typeDocumentsRepository) {
        this.typeDocumentsRepository = typeDocumentsRepository;
    }

    async execute() {
        return await this.typeDocumentsRepository.list();
    }
};
