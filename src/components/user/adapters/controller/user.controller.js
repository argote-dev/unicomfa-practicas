module.exports = class UserController {
  constructor(createUser, listUsers) {
    this.createUser = createUser;
    this.listUsers = listUsers;
  }

  async insertUser(req, res) {
    const { name, last_name, address, birth_date, email, type_document, type_municipality, type_user } = req.body;
    try {
      await this.createUser.execute({
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
    } catch {
      res.status(500).send({ message: 'An error ocurred while creating the user.' });
    }
  }

  async listAllUsers(req, res) {
    try {
      let data = await this.listUsers.execute();
      res.status(201).send(data);
    } catch {
      res.status(500).send({ message: 'An error ocurred while list the users.' });
    }
  }
};
