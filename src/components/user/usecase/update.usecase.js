module.exports = class DeleteUser {
  constructor(userRespository) {
    this.userRespository = userRespository;
  }

  async execute(user) {
    await this.userRespository.update(user);
  }
};
