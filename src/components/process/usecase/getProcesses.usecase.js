module.exports = class GetProcessesUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async invoke() {
    await this.repository.getAll();
  }
};
