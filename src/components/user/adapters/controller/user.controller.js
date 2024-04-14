module.exports = class UserController {
  constructor(createUser) {
    this.createUser = createUser;
  }

  async insertUser(req, res) {
    const { name, last_name, address, birth_date, email } = req.body;
    try {
      await this.createUser.execute({ name, last_name, address, birth_date, email });
      res.status(201).send({ data: {}, errro: {} });
    } catch (e) {
      console.log(e);
      res.status(500).send({ data: {}, errro: { message: 'An error ocurred while creating the user.' } });
    }
  }
};
