module.exports = class TypeProcessController {
  constructor(createTypeProcess, listTypeProcess, updateTypeProcess, deleteTypeProcess) {
    this.createTypeProcess = createTypeProcess;
    this.listTypeProcess = listTypeProcess;
    this.updateTypeProcess = updateTypeProcess;
    this.deleteTypeProcess = deleteTypeProcess;
  }

  async insertTypeProcess(req, res) {
    const { name } = req.body;
    try {
      await this.createTypeProcess.execute({
        name,
      });
      res.status(201).send({});
    } catch (error) {
      res.status(500).send({
        message: 'An error ocurred while creating the typeProcess.',
        error: error.message,
      });
    }
  }

  async listAllTypeProcess(req, res) {
    try {
      let data = await this.listTypeProcess.execute();
      res.status(200).send(data);
    } catch {
      res.status(500).send({ message: 'An error ocurred while list the typeProcess.' });
    }
  }

  async deleteTypeProcessById(req, res) {
    try {
      const id = req.params.id;
      await this.deleteTypeProcess.execute(Number(id));
      res.status(200).send({});
    } catch {
      res.status(500).send({ message: 'An error ocurred while delete the typeProcess.' });
    }
  }

  async updateTypeProcessInfo(req, res) {
    const { name } = req.body;
    try {
      await this.updateTypeProcess.execute({
        name,
      });
      res.status(200).send({});
    } catch {
      res.status(500).send({ message: 'An error ocurred while update the typeProcess.' });
    }
  }
};
