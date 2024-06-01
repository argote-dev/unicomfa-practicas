module.exports = class DeleteTypeDepartment {
  constructor(typeDepartmentRepository) {
    this.typeDepartmentRepository = typeDepartmentRepository;
  }

  async execute(id) {
    await this.typeDepartmentRepository.delete(id);
  }
};
