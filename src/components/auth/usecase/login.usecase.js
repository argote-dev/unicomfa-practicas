const Auth = require('../entity/auth.entity');

module.exports = class LoginUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute({ email, password }) {
    this.repository.login(new Auth(email, password));
  }
};
