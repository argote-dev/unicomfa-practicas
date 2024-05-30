module.exports = class ListProgram {
    constructor(programRepository) {
      this.programRepository = programRepository;
    }
  
    async execute() {
      return await this.programRepository.list();
    }
  };