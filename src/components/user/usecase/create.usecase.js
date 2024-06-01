const User = require('../entity/user.entity');
const bcrypt = require('bcrypt');

async function encryptPassword(password) {
  return await bcrypt.hash(password, 10);
}

module.exports = class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(user) {
    const { num_document, name, last_name, address, birth_date, email, type_document, type_user, type_municipality } =
      user;

    const password = await encryptPassword(num_document);

    await this.userRepository.insert(
      new User(
        num_document,
        name,
        last_name,
        address,
        birth_date,
        email,
        type_document,
        type_user,
        type_municipality,
        password ?? '',
      ),
    );
  }
};
