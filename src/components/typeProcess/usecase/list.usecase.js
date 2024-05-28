module.exports = class ListTypeProcess {
    constructor(typeProcessRepository) {
      this.typeProcessRepository = typeProcessRepository;
    }
  
    async execute() {
      return await this.typeProcessRepository.list();
    }
  };
  