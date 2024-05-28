module.exports = class DeleteTypeDocuments {
    constructor(typeDRespository) {
        this.typeDRespository = typeDRespository;
    }

    async execute(id) {
        await this.typeDRespository.delete(id);
    }
};
