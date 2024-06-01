module.exports = class typeDepartmentController {
  constructor(createTypeDepartment, lisTypeDepartment, updateTypeDepartment, deleteTypeDepartment) {
    this.createTypeDepartment = createTypeDepartment;
    this.lisTypeDepartment = lisTypeDepartment;
    this.updateTypeDepartment = updateTypeDepartment;
    this.deleteTypeDepartment = deleteTypeDepartment;
  }

  async insertTypeDepartment(req, res) {
    const { name } = req.body;
    try {
      await this.createProgram.execute({
        name,
      });
      res.status(201).send({});
    } catch (error) {
      res.status(500).send({
        message: 'An error ocurred while creating the typeDepartment.',
        error: error.message,
      });
    }
  }

  async listAllTypeDepartment(req, res) {
    try {
      let data = await this.lisTypeDepartment.execute();
      res.status(200).send(data);
    } catch {
      res.status(500).send({ message: 'An error ocurred while list the typeDepartament.' });
    }
  }

  async deleteTypeDepartmentById(req, res) {
    try {
      const id = req.params.id;
      await this.deleteTypeDepartment.execute(Number(id));
      res.status(200).send({});
    } catch {
      res.status(500).send({ message: 'An error ocurred while delete the typeDepartment.' });
    }
  }

  async updateTypeDepartmentInfo(req, res) {
    const { name } = req.body;
    try {
      await this.updateTypeDepartment.execute({
        name,
      });
      res.status(200).send({});
    } catch {
      res.status(500).send({ message: 'An error ocurred while update the typeDepartment.' });
    }
  }
};
