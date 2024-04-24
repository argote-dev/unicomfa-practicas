module.exports = class ListUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute() {
    return await this.userRepository.list();
  }
};
