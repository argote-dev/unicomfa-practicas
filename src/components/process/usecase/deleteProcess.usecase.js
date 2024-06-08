module.exports = class DeleteProcessUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async invoke(id) {
    await this.repository.delete(id);
  }
};
