module.exports = class CompanyController {
    constructor(createCompany, listCompany, updateCompany, deleteCompnay) {
        this.createCompany = createCompany;
        this.listCompany = listCompany;
        this.updateCompany = updateCompany;
        this.deleteCompnay = deleteCompnay;
    }

    async insertCompany(req, res) {
        const { nit, name, date_association, address, phone, email } = req.body;
        try {
            await this.createUser.execute({
                nit,
                name,
                date_association,
                address,
                phone,
                email,
            });
            res.status(201).send({});
        } catch {
            res.status(500).send({ message: 'An error ocurred while creating the Company.' });
        }
    }

    async listAllCompany(req, res) {
        try {
            let data = await this.listCompany.execute();
            res.status(200).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while list the Company.' });
        }
    }

    async deleteCompanyById(req, res) {
        try {
            const id = req.params.id;
            await this.deleteCompany.execute(Number(id));
            res.status(200).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while delete the Company.' });
        }
    }

    async updateCompanyInfo(req, res) {
        const { nit, name, date_association, address, phone, email } = req.body;
        try {
            await this.updateCompany.execute({
                nit,
                name,
                date_association,
                address,
                phone,
                email,
            });
            res.status(200).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while update the Company.' });
        }
    }
};
