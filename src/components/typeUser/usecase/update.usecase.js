module.exports = class DeleteTypeUser {
    constructor(typeUserRespository) {
      this.typeUserRespository = typeUserRespository;
    }
  
    async execute(typeUser) {
      await this.typeUserRespository.update(typeUser);
    }
  };