module.exports = class InsertProcessUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async invoke(process) {
    await this.repository.insert(process);
  }
};
