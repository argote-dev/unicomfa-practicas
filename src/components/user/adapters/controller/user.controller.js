module.exports = class UserController {
  constructor(createUser, listUsers, updateUser, deleteUser) {
    this.createUser = createUser;
    this.listUsers = listUsers;
    this.updateUser = updateUser;
    this.deleteUser = deleteUser;
  }

  async insertUser(req, res) {
    const { num_document, name, last_name, address, birth_date, email, type_document, type_municipality, type_user } =
      req.body;
    try {
      await this.createUser.execute({
        num_document,
        name,
        last_name,
        address,
        birth_date,
        email,
        type_document,
        type_municipality,
        type_user,
      });
      res.status(201).send({});
    } catch (error) {
      res.status(500).send({ message: 'An error ocurred while creating the user.', error: error });
    }
  }

  async listAllUsers(req, res) {
    try {
      let data = await this.listUsers.execute();
      res.status(200).send(data);
    } catch {
      res.status(500).send({ message: 'An error ocurred while list the users.' });
    }
  }

  async deleteUserById(req, res) {
    try {
      const id = req.params.id;
      await this.deleteUser.execute(Number(id));
      res.status(200).send(data);
    } catch {
      res.status(500).send({ message: 'An error ocurred while delete the user.' });
    }
  }

  async updateUserInfo(req, res) {
    const { name, last_name, address, birth_date, email, type_document, type_municipality, type_user } = req.body;
    try {
      await this.updateUser.execute({
        name,
        last_name,
        address,
        birth_date,
        email,
        type_document,
        type_municipality,
        type_user,
      });
      res.status(200).send(data);
    } catch {
      res.status(500).send({ message: 'An error ocurred while update the user.' });
    }
  }
};
