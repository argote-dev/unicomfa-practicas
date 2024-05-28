module.exports = class StatusProcessController {
    constructor(createStatusProcess, listStatusProcess, updateStatusProcess, deleteStatusProcess) {
      this.createStatusProcess = createStatusProcess;
      this.listStatusProcess = listStatusProcess;
      this.updateStatusProcess = updateStatusProcess;
      this.deleteStatusProcess = deleteStatusProcess;
    }
  
    async insertStatusProcess(req, res) {
      const { name } = req.body;
      try {
        await this.createStatusProcess.execute({
          name,
        });
        res.status(201).send({});
      } catch {
        res.status(500).send({ message: 'An error ocurred while creating the statusProcess.' });
      }
    }
  
    async listAllStatusProcess(req, res) {
      try {
        let data = await this.listStatusProcess.execute();
        res.status(200).send(data);
      } catch {
        res.status(500).send({ message: 'An error ocurred while list the statusProcess.' });
      }
    }
  
    async deleteStatusProcessById(req, res) {
      try {
        const id = req.params.id;
        await this.deleteStatusProcess.execute(Number(id));
        res.status(200).send(data);
      } catch {
        res.status(500).send({ message: 'An error ocurred while delete the statusProcess.' });
      }
    }
  
    async updateStatusProcessInfo(req, res) {
      const { name } = req.body;
      try {
        await this.updateStatusProcess.execute({
          name
        });
        res.status(200).send(data);
      } catch {
        res.status(500).send({ message: 'An error ocurred while update the statusProcess.' });
      }
    }
  };
  