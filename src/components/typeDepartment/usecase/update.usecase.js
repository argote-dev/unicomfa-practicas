module.exports = class UpdateTypeDepartment {
  constructor(typeDepartmentRepository) {
    this.typeDepartmentRepository = typeDepartmentRepository;
  }

  async execute(typeDepartment) {
    await this.typeDepartmentRepository.update(typeDepartment);
  }
};
