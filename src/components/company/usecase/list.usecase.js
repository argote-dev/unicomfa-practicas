module.exports = class ListCompany {
    constructor(companyRespository) {
        this.companyRespository = companyRespository;
    }

    async execute() {
        return await this.companyRespository.list();
    }
};
