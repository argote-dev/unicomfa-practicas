module.exports = class userOnProcessController {
    constructor(createUserOnProcess, listUserOnProcess, updateUserOnProcess, deleteUserOnProcess) {
        this.createUserOnProcess = createUserOnProcess;
        this.listUserOnProcess = listUserOnProcess;
        this.updateUserOnProcess = updateUserOnProcess;
        this.deleteUserOnProcess = deleteUserOnProcess;
    }

    async insertUserOnProcess(req, res) {
        const { userId, processId } = req.body;
        try {
            await this.createUserOnProcess.execute({
                userId,
                processId,
            });
            res.status(201).send({});
        } catch {
            res.status(500).send({ message: 'An error ocurred while creating the userOnProcess.' });
        }
    }

    async listAllUserOnProcess(req, res) {
        try {
            let data = await this.listUserOnProcess.execute();
            res.status(201).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while list the userOnProcess.' });
        }
    }
    async deleteUserOnProcessById(req, res) {
        try {
            const id = req.params.id;
            await this.deleteUser.execute(Number(id));
            res.status(200).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while delete the userOnProcess.' });
        }
    }

    async updateUserOnProcessInfo(req, res) {
        const { userId, processId } = req.body;
        try {
            await this.updateUser.execute({
                userId,
                processId,
            });
            res.status(200).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while update the userOnProcess.' });
        }
    }
};