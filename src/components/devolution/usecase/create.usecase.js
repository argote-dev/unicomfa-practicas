const Devolution = require('../entity/devolution.entity');

module.exports = class CreateDevolution {
  constructor(devolutionRepository) {
    this.devolutionRepository = devolutionRepository;
  }

  async execute(devolution) {
    const { description } = devolution;
    await this.devolutionRepository.insert(new Devolution(description));
  }
};
