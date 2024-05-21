module.exports = class UpdateCompany {
    constructor(companyRespository) {
        this.companyRespository = companyRespository;
    }

    async execute(company) {
        await this.companyRespository.update(company);
    }
};
