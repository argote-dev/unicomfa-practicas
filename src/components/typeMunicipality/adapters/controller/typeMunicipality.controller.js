module.exports = class TypeMunicpalityController {
    constructor(createTypeMunicipality, listTypeMunicipality, updateTypeMunicipality, delelteTypeMunicipality) {
        this.createTypeMunicipality = createTypeMunicipality;
        this.listTypeMunicipality = listTypeMunicipality;
        this.updateTypeMunicipality = updateTypeMunicipality;
        this.delelteTypeMunicipality = delelteTypeMunicipality;
    }

    async insertTypeMunicipality(req, res) {
        const { name,typeDepartmentId } = req.body;
        try {
            await this.createTypeMunicipality.execute({
                name,
                typeDepartmentId,
            });
            res.status(201).send({});
        } catch {
            res.status(500).send({ message: 'An error ocurred while creating the typemunicipality.' });
        }
    }

    async listAllTypeMunicipality(req, res) {
        try {
            let data = await this.listTypeMunicipality.execute();
            res.status(200).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while list the typeMunicipality.' });
        }
    }

    async deleteTypeMunicipalityById(req, res) {
        try {
            const id = req.params.id;
            await this.deleteTypeMunicipality.execute(Number(id));
            res.status(200).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while delete the typeMunicipality.' });
        }
    }

    async updateTypeMunicipalityInfo(req, res) {
        const { name, typeDepartmentId } = req.body;
        try {
            await this.updateTypeMunicipality.execute({
                name,
                typeDepartmentId,
            });
            res.status(200).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while update the typeMunicipality.' });
        }
    }
};