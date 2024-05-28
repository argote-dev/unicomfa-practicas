module.exports = class ProgramController {
    constructor(createProgram, listProgram, updateProgram, deleteProgram) {
      this.createProgram = createProgram;
      this.listProgram = listProgram;
      this.updateProgram = updateProgram;
      this.deleteProgram = deleteProgram;
    }
  
    async insertProgram(req, res) {
      const { name, idFaculty} = req.body;
      try {
        await this.createProgram.execute({
          name,
          idFaculty,
        });
        res.status(201).send({});
      } catch {
        res.status(500).send({ message: 'An error ocurred while creating the program.' });
      }
    }
  
    async listAllProgram(req, res) {
      try {
        let data = await this.listProgram.execute();
        res.status(200).send(data);
      } catch {
        res.status(500).send({ message: 'An error ocurred while list the program.' });
      }
    }
  
    async deleteProgramById(req, res) {
      try {
        const id = req.params.id;
        await this.deleteProgram.execute(Number(id));
        res.status(200).send(data);
      } catch {
        res.status(500).send({ message: 'An error ocurred while delete the program.' });
      }
    }
  
    async updateProgramInfo(req, res) {
      const { name, idFaculty } = req.body;
      try {
        await this.updateProgram.execute({
          name,
          idFaculty
        });
        res.status(200).send(data);
      } catch {
        res.status(500).send({ message: 'An error ocurred while update the program.' });
      }
    }
  };
  