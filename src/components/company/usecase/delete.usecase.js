module.exports = class DeleteCompany {
    constructor(ComapanyRespository) {
        this.ComapanyRespository = ComapanyRespository;
    }

    async execute(id) {
        await this.ComapanyRespository.delete(id);
    }
};
