module.exports = class UpdateDocuments {
    constructor(documentsRespository) {
        this.documentsRespository = documentsRespository;
    }

    async execute(documents) {
        await this.documentsRespository.update(documents);
    }
};
