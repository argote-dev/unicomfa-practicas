const Documents = require('../entity/documents.entity');

module.exports = class CreateDocuments {
    constructor(documentsRepository) {
        this.documentsRepository = documentsRepository;
    }

    async execute(documents) {
        const { url, date, typeId, userId } = documents;
        await this.documentsRepository.insert(
            new Documents(
                url,
                date,
                typeId,
                userId
            ),
        );
    }


};
