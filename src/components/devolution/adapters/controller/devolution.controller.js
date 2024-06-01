module.exports = class DevolutionController {
  constructor(createDevolution, listDevolution, updatedDevolution, deleteDevolution) {
    this.createDevolution = createDevolution;
    this.listDevolution = listDevolution;
    this.updatedDevolution = updatedDevolution;
    this.deleteDevolution = deleteDevolution;
  }

  async insertDevolution(req, res) {
    const { description } = req.body;
    try {
      await this.createDevolution.execute({
        description,
      });
      res.status(201).send({});
    } catch (error) {
      res.status(500).send({
        message: 'An error ocurred while creating the Devolution.',
        error: error.message,
      });
    }
  }

  async listAllDevolution(req, res) {
    try {
      let data = await this.listDevolution.execute();
      res.status(200).send(data);
    } catch {
      res.status(500).send({ message: 'An error ocurred while list the Devolution.' });
    }
  }

  async deleteDevolutionById(req, res) {
    try {
      const id = req.params.id;
      await this.deleteDevolution.execute(Number(id));
      res.status(200).send({});
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'An error ocurred while delete the Devolution.' });
    }
  }

  async updateDevolutionInfo(req, res) {
    const { description } = req.body;
    try {
      await this.updatedDevolution.execute({
        description,
      });
      res.status(200).send({});
    } catch {
      res.status(500).send({ message: 'An error ocurred while update the Devolution.' });
    }
  }
};
