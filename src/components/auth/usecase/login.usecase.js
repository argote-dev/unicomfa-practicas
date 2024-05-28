const Auth = require('../entity/auth.entity');

module.exports = class LoginUseCase {
  constructor(repository) {
    this.repository = repository;
    this.execute = this.execute.bind(this);
  }

  execute({ email, password }) {
    return this.repository.login(new Auth(email, password));
  }
};
