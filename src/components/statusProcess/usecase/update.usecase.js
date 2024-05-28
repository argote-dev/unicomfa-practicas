module.exports = class updateStatusProcess {
    constructor(statusProcessRespository) {
      this.statusProcessRespository = statusProcessRespository;
    }
  
    async execute(statusProcess) {
      await this.statusProcessRespository.update(statusProcess);
    }
  };
  