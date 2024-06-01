module.exports = class ListTypeMunicipality {
    constructor(typeMunicipalityRepository) {
      this.typeMunicipalityRepository = typeMunicipalityRepository;
    }
  
    async execute() {
      return await this.typeMunicipalityRepository.list();
    }
  };
  