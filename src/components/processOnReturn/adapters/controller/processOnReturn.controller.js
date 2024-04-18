module.exports = class ProcessOnController {
    constructor(createProcessOnReturn, listProcessOnReturn) {
        this.createProcessOnReturn = createProcessOnReturn;
        this.listProcessOnReturn = listProcessOnReturn;
    }
    
    async insertProcessOnReturn(req, res) {
        const { process_Id, return_Id} = req.body;
        try {
            await this.createProcessOnReturn.execute({
                process_Id,
                return_Id,
            });
            res.status(201).send({});
        } catch {
            res.status(500).send({ message: 'An error ocurred while creating the user.' });
        }
    }

    async listAllProcessOnReturn(req, res) {
        try {
            let data = await this.listProcessOnReturn.execute();
            res.status(201).send(data);
        } catch {
            res.status(500).send({ message: 'An error ocurred while list the users.' });
        }
    }
};
