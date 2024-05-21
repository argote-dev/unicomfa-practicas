const TypeUser = require('../entity/typeUser.entity');

module.exports = class CreateTypeUser {
  constructor(typeUserRepository) {
    this.typeUserRepository = typeUserRepository;
  }

  async execute(typeUser) {
    const { name } = typeUser;
    await this.typeUserRepository.insert(
      new TypeUser(name),
    );
  }
};