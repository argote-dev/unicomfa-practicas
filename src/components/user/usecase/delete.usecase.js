module.exports = class DeleteUser {
  constructor(userRespository) {
    this.userRespository = userRespository;
  }

  async execute(id) {
    await this.userRespository.delete(id);
  }
};
