module.exports = class DeleteProgram {
  constructor(programRespository) {
    this.programRespository = programRespository;
  }

  async execute(id) {
    await this.programRespository.delete(id);
  }
};
