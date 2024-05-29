module.exports = class UpdateTypeMunicipality {
    constructor(typeMunicipalityRespository) {
      this.typeMunicipalityRespository = typeMunicipalityRespository;
    }
  
    async execute(typeMunicipality) {
      await this.typeMunicipalityRespository.update(typeMunicipality);
    }
  };
  