const User = require('../entity/user.entity');

module.exports = class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(user) {
    const { name, last_name, address, birth_date, email, type_document, type_user, type_municipality } = user;
    await this.userRepository.insert(
      new User(name, last_name, address, birth_date, email, type_document, type_user, type_municipality),
    );
  }
};
