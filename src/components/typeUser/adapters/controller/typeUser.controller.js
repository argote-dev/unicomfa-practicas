module.exports = class TypeUserController {
    constructor(createTypeUser, listTypeUser, updateTypeUser, deleteTypeUser) {
      this.createTypeUser = createTypeUser;
      this.listTypeUser = listTypeUser;
      this.updateTypeUser = updateTypeUser;
      this.deleteTypeUser = deleteTypeUser;
    }
  
    async insertTypeUser(req, res) {
      const { name } = req.body;
      try {
        await this.createTypeUser.execute({
          name,
          
        });
        res.status(201).send({});
      } catch {
        res.status(500).send({ message: 'An error ocurred while creating the TypeUser.' });
      }
    }
  
    async listAllTypeUser(req, res) {
      try {
        let data = await this.listTypeUser.execute();
        res.status(200).send(data);
      } catch {
        res.status(500).send({ message: 'An error ocurred while list the TypeUser.' });
      }
    }
  
    async deleteTypeUserById(req, res) {
      try {
        const id = req.params.id;
        await this.deleteTypeUser.execute(Number(id));
        res.status(200).send(data);
      } catch {
        res.status(500).send({ message: 'An error ocurred while delete the TypeUser.' });
      }
    }
  
    async updateTypeUserInfo(req, res) {
      const { name } = req.body;
      try {
        await this.updateTypeUser.execute({
          name,
          
        });
        res.status(200).send(data);
      } catch {
        res.status(500).send({ message: 'An error ocurred while update the TypeUser.' });
      }
    }
  };