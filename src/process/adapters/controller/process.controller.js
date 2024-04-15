module.exports = class ProcessController {
    constructor(createProcess, listProcess) {
        this.createProcess = createProcess;
        this.listProcess = listProcess;
    }
    async insertProcess(req, res) {
        const { aproved, type_Id, status_ProcessId } = req.body;
        try {
            await this.createProcess.execute({
                aproved,
                type_Id,
                status_ProcessId

            });
            res.status(201).send({});
        } catch {
            res.status(500).send({ message: 'An error ocurred while creating the user.' });
        }
    }

    async listAllProcess(req, res) {
        try {
            let data = await this.listProcess.execute();
            res.status(201).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while list the users.' });
        }
    }
};