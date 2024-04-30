module.exports = class UpdateUser {
  constructor(userRespository) {
    this.userRespository = userRespository;
  }

  async execute(user) {
    await this.userRespository.update(user);
  }
};
