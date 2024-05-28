module.exports = class UpdateProgram {
    constructor(programRespository) {
      this.programRespository = programRespository;
    }
  
    async execute(program) {
      await this.programRespository.update(program);
    }
  };
  