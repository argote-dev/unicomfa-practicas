const Devolution = require('../entity/devolution.entity');
const bcrypt = require('bcrypt');

const salt = 10;

module.exports = class CreateDevolution {
  constructor(devolutionRepository) {
    this.devolutionRepository = devolutionRepository;
  }

  async execute(devolution) {
    const { description } = devolution;
    await this.devolutionRepository.insert(
      new Devolution(description),
    );
  }
};