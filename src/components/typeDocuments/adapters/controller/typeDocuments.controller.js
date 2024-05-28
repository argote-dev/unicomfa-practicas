module.exports = class TypeDocumentsController {
    constructor(createTypeDocuments, listTypeDocuments, TypeupdateDocuments, TypedeleteDocuments) {
        this.createTypeDocuments = createTypeDocuments;
        this.listTypeDocuments = listTypeDocuments;
        this.TypeupdateDocuments = TypeupdateDocuments;
        this.TypedeleteDocuments = TypedeleteDocuments;
    }

    async insertTypeDocuments(req, res) {
        const { name } = req.body;
        try {
            await this.createTypeDocuments.execute({
                name,
            });
            res.status(201).send({});
        } catch {
            res.status(500).send({ message: 'An error ocurred while creating the typedocument.' });
        }
    }

    async listAllTypeDocuments(req, res) {
        try {
            let data = await this.listTypeDocuments.execute();
            res.status(200).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while list the typedocument.' });
        }
    }

    async deleteTypeDocuemtsById(req, res) {
        try {
            const id = req.params.id;
            await this.deleteTypeDocuments.execute(Number(id));
            res.status(200).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while delete the typedocument.' });
        }
    }

    async updateTypeDocumentsInfo(req, res) {
        const { name } = req.body;
        try {
            await this.updateDocuments.execute({
                name,
            });
            res.status(200).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while update the typedocument.' });
        }
    }
};