module.exports = class FacultyController {
  constructor(createFaculty, listFaculty, updateFaculty, deleteFaculty) {
    this.createFaculty = createFaculty;
    this.listFaculty = listFaculty;
    this.updateFaculty = updateFaculty;
    this.deleteFaculty = deleteFaculty;
  }

  async insertFaculty(req, res) {
    const { name } = req.body;
    try {
      await this.createFaculty.execute({
        name,
      });
      res.status(201).send({});
    } catch (error) {
      res.status(500).send({
        message: 'An error ocurred while creating the faculty.',
        error: error.message,
      });
    }
  }

  async listAllFaculty(req, res) {
    try {
      let data = await this.listFaculty.execute();
      res.status(200).send(data);
    } catch {
      res.status(500).send({ message: 'An error ocurred while list the faculty.' });
    }
  }

  async deleteFacultyById(req, res) {
    try {
      const id = req.params.id;
      await this.deleteFaculty.execute(Number(id));
      res.status(200).send({});
    } catch {
      res.status(500).send({ message: 'An error ocurred while delete the faculty.' });
    }
  }

  async updateFacultyInfo(req, res) {
    const { name } = req.body;
    try {
      await this.updateFaculty.execute({
        name,
      });
      res.status(200).send({});
    } catch {
      res.status(500).send({ message: 'An error ocurred while update the faculty.' });
    }
  }
};
