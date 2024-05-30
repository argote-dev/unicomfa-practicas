module.exports = class UpdateProcessUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async invoke(process) {
    await this.repository.update(process);
  }
};
