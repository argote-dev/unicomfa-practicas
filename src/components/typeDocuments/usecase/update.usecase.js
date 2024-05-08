module.exports = class UpdateTypeDocuments {
    constructor(typeDocumentsRespository) {
        this.typeDocumentsRespository = typeDocumentsRespository;
    }

    async execute(typeDocuments) {
        await this.typeDocumentsRespository.update(typeDocuments);
    }
};
