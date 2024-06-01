const TypeDepartment = require('../entity/typeDepartment.entity');

module.exports = class CreateTypeDepartment {
  constructor(typeDepartmentRepository) {
    this.typeDepartmentRepository = typeDepartmentRepository;
  }

  async execute(typeDepartment) {
    const { name } = typeDepartment;
    await this.typeDepartmentRepository.insert(new TypeDepartment(name));
  }
};
