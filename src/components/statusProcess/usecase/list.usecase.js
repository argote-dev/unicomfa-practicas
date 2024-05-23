module.exports = class listStatusProcess {
    constructor(statusProcessRepository) {
      this.statusProcessRepository = statusProcessRepository;
    }
  
    async execute() {
      return await this.statusProcessRepository.list();
    }
  };
  