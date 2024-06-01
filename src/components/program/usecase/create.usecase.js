const Program = require('../entity/program.entity');

module.exports = class CreateProgram {
  constructor(programRepository) {
    this.programRepository = programRepository;
  }

  async execute(program) {
    const { name, idFaculty } = program;
    await this.userRepository.insert(new Program(name, idFaculty));
  }
};
