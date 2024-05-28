const TypeDocuments = require('../entity/typeDocuments.entity');


module.exports = class CreateTypeDocuments {
    constructor(typeDocumentsRepository) {
        this.typeDocumentsRepository = typeDocumentsRepository;
    }

    async execute(typeDocuments) {
        const { name } =
            typeDocuments;
        await this.typeDocumentsRepository.insert(
            new TypeDocuments(
                name
            ),
        );
    }
};
