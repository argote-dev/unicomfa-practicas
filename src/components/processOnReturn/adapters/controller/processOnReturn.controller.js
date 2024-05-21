module.exports = class ProcessOnReturnController {
    constructor(createProcessOnReturn, listProcessOnReturn, updateProcesOnReturn, deleteProcessOnReturn) {
        this.createProcessOnReturn = createProcessOnReturn;
        this.listProcessOnReturn = listProcessOnReturn;
        this.updateProcesOnReturn = updateProcesOnReturn;
        this.deleteProcessOnReturn = deleteProcessOnReturn;
    }

    async insertProcessOnReturn(req, res) {
        const { process_Id, return_Id } = req.body;
        try {
            await this.createProcessOnReturn.execute({
                process_Id,
                return_Id,
            });
            res.status(201).send({});
        } catch {
            res.status(500).send({ message: 'An error ocurred while creating the processOnReturn.' });
        }
    }

    async listAllProcessOnReturn(req, res) {
        try {
            let data = await this.listProcessOnReturn.execute();
            res.status(201).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while list the processOnReturn.' });
        }
    }

    async deleteProcessOnReturnById(req, res) {
        try {
            const id = req.params.id;
            await this.deleteUser.execute(Number(id));
            res.status(200).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while delete the processOnReturn.' });
        }
    }

    async updateProcesOnReturnInfo(req, res) {
        const { process_Id, return_Id } = req.body;
        try {
            await this.updateProcesOnReturn.execute({
                process_Id,
                return_Id,
            });
            res.status(200).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while update the processOnReturn.' });
        }
    }
};
