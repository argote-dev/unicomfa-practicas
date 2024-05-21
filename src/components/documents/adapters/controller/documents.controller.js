module.exports = class DocumentsController {
    constructor(createDocuments, listDocuments, updateDocuments, deleteDocuments) {
        this.createDocuments = createDocuments;
        this.listDocuments = listDocuments;
        this.updateDocuments = updateDocuments;
        this.deleteDocuments = deleteDocuments;
    }

    async insertDocuments(req, res) {
        const { url, date, typeId, userId } = req.body;
        try {
            await this.createDocuments.execute({
                url,
                date,
                typeId,
                userId
            });
            res.status(201).send({});
        } catch {
            res.status(500).send({ message: 'An error ocurred while creating the document.' });
        }
    }

    async listAllDocuments(req, res) {
        try {
            let data = await this.listDocuments.execute();
            res.status(200).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while list the document.' });
        }
    }

    async deleteDocuemtsById(req, res) {
        try {
            const id = req.params.id;
            await this.deleteDocuments.execute(Number(id));
            res.status(200).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while delete the document.' });
        }
    }

    async updateDocumentsInfo(req, res) {
        const { url, date, typeId, userId } = req.body;
        try {
            await this.updateDocuments.execute({
                url,
                date,
                typeId,
                userId
            });
            res.status(200).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while update the document.' });
        }
    }
};
