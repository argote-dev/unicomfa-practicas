const TypeProcess = require('../entity/typeProcess.entity');

module.exports = class createTypeProcess {
  constructor(TypeProcessRepository) {
    this.TypeProcessRepository = TypeProcessRepository;
  }

  async execute(typeProcess) {
    const { name } =
    typeProcess;
    
    await this.TypeProcessRepository.insert(
      new TypeProcess(
        name,
      ),
    );
  }
};
