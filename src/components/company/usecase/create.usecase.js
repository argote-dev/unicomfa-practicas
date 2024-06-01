const Company = require('../entity/company.entity');

module.exports = class CreateCompany {
  constructor(companyRepository) {
    this.companyRepository = companyRepository;
  }

  async execute(company) {
    const { nit, name, date_association, address, phone, email } = company;
    await this.companyRepository.insert(new Company(nit, name, date_association, address, phone, email));
  }
};
