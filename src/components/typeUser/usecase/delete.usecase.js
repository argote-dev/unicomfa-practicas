module.exports = class deleteTypeUser {
    constructor(typeUserRespository) {
      this.typeUserRespository = typeUserRespository;
    }
  
    async execute(id) {
      await this.typeUserRespository.delete(id);
    }
  };