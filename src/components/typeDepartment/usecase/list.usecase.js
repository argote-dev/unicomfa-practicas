module.exports = class ListTypeDepartment {
    constructor(typeDepartmentRepository) {
      this.typeDepartmentRepository = typeDepartmentRepository;
    }
  
    async execute() {
      return await this.typeDepartmentRepository.list();
    }
  };