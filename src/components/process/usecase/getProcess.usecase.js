module.exports = class GetProcessUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async invoke(id) {
    await this.repository.get(id);
  }
};
