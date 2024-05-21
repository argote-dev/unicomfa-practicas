module.exports = class DeleteDocuments {
    constructor(documentsRespository) {
        this.documentsRespository = documentsRespository;
    }

    async execute(id) {
        await this.documentsRespository.delete(id);
    }
};
