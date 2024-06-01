module.exports = class deleteStatusProcess {
  constructor(statusProcessRespository) {
    this.statusProcessRespository = statusProcessRespository;
  }

  async execute(id) {
    await this.statusProcessRespository.delete(id);
  }
};
