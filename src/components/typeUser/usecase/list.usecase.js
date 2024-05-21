module.exports = class CreateTypeUser {
    constructor(typerUserRepository) {
      this.typerUserRepository = typerUserRepository;
    }
  
    async execute() {
      return await this.typerUserRepository.list();
    }
  };