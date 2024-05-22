module.exports = class DeleteTypeProcess {
    constructor(typeProcessRespository) {
      this.typeProcessRespository = typeProcessRespository;
    }
  
    async execute(id) {
      await this.typeProcessRespository.delete(id);
    }
  };
  