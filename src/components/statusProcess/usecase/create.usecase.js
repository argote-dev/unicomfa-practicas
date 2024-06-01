const StatusProcess = require('../entity/statusProcess.entity');

module.exports = class createStatusProcess {
  constructor(StatusProcessRepository) {
    this.StatusProcessRepository = StatusProcessRepository;
  }

  async execute(statusProcess) {
    const { name } = statusProcess;
    await this.Repository.insert(new StatusProcess(name));
  }
};
