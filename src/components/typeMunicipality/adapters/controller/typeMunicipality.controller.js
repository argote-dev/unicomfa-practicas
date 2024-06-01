module.exports = class TypeMunicpalityController {
  constructor(create, list, update, remove) {
    this.create = create;
    this.list = list;
    this.update = update;
    this.remove = remove;
  }

  async insertTypeMunicipality(req, res) {
    const { name, typeDepartmentId } = req.body;
    try {
      await this.create.execute({
        name,
        typeDepartmentId,
      });
      res.status(201).send({});
    } catch (error) {
      res.status(500).send({
        message: 'An error ocurred while creating the typemunicipality.',
        errorl: error.message,
      });
    }
  }

  async listAllTypeMunicipality(req, res) {
    try {
      let data = await this.list.execute();
      res.status(200).send(data);
    } catch {
      res.status(500).send({ message: 'An error ocurred while list the typeMunicipality.' });
    }
  }

  async deleteTypeMunicipalityById(req, res) {
    try {
      const id = req.params.id;
      await this.delete.execute(Number(id));
      res.status(200).send({});
    } catch {
      res.status(500).send({ message: 'An error ocurred while delete the typeMunicipality.' });
    }
  }

  async updateTypeMunicipalityInfo(req, res) {
    const { name, typeDepartmentId } = req.body;
    try {
      await this.update.execute({
        name,
        typeDepartmentId,
      });
      res.status(200).send({});
    } catch {
      res.status(500).send({ message: 'An error ocurred while update the typeMunicipality.' });
    }
  }
};
