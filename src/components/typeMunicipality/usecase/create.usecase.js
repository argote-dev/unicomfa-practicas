const TypeMunicipality = require('../entity/typeMunicipality.entity');


module.exports = class CreateTypeMunicipality {
  constructor(typeMunicipalityRepository) {
    this.typeMunicipalityRepository = typeMunicipalityRepository;
  }

  async execute(typeMunicipality) {
    const { name, typeDepartmentId, } =
      typeMunicipality;
    await this.typeMunicipalityRepository.insert(
      new TypeMunicipality(
        
        name,
        typeDepartmentId,
        
      ),
    );
  }
};
