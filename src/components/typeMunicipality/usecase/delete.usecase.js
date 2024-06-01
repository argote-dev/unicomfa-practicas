module.exports = class DeleteTypeMunicipality {
    constructor(typeMunicipalityRespository) {
      this.typeMunicipalityRespository = typeMunicipalityRespository;
    }
  
    async execute(id) {
      await this.typeMunicipalityRespository.delete(id);
    }
  };
  