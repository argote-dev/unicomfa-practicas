module.exports = class ProcessController {
  constructor(insert, get, all, update, remove) {
    this.insert = insert;
    this.get = get;
    this.all = all;
    this.update = update;
    this.remove = remove;
  }

  async insert(req, res) {
    try {
      const { type, status } = req.body;
      await this.insert.invoke({ type, status, approved: false });
    } catch (error) {
      res.status(500).send({
        message: 'An error ocurred while creating the process.',
        error: error.message,
      });
    }
  }
  async get(req, res) {
    try {
      const id = req.params.id;
      await this.get.invoke(id);
    } catch (error) {
      res.status(500).send({
        message: 'An error ocurred while getting the process.',
        error: error.message,
      });
    }
  }
  async all(req, res) {
    try {
      return await this.all.invoke();
    } catch (error) {
      res.status(500).send({
        message: 'An error ocurred while obtain all process.',
        error: error.message,
      });
    }
  }
  async update(req, res) {
    try {
      const { id, type, status, approved } = req.body;
      await this.update.invoke({ id, type, status, approved });
    } catch (error) {
      res.status(500).send({
        message: 'An error ocurred while updating the process.',
        error: error.message,
      });
    }
  }
  async remove(req, res) {
    try {
      const id = req.params.id;
      await this.remove(id);
    } catch (error) {
      res.status(500).send({
        message: 'An error ocurred while removing the process.',
        error: error.message,
      });
    }
  }
};
