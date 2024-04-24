const express = require('express');
const router = express.Router();

const DevolutionRepository = require('../repository/devolution.repository');
const CreateDevolutionUseCase = require('../../usecase/create.usecase');
const ListDevolutionUseCase = require('../../usecase/list.usecase');
const UpdateDevolutionUseCase = require('../../usecase/update.usecase');
const DeleteDevolutionUsecase = require('../../usecase/delete.usecase');
const DevolutionController = require('../controller/devolution.controller');

const devolutionRepository = new DevolutionRepository();
const createDevolutionUseCase = new CreateDevolutionUseCase(devolutionRepository);
const listDevolutionUseCase = new ListDevolutionUseCase(devolutionRepository);
const updateDevolutionUseCase = new UpdateDevolutionUseCase(devolutionRepository);
const deleteDevolutonUseCase = new DeleteDevolutionUsecase(devolutionRepository);
const devolutionController = new DevolutionController(createDevolutionUseCase, listDevolutionUseCase, updateDevolutionUseCase, deleteDevolutonUseCase);


/**
 * @swagger
 * /api/v1/devolution:
 *   post:
 *     tags:
 *      - Devolution
 *     summary: Insert new devolution
 *     description: Save devolution into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              descripcion:
 *                type: string
 *                example: Documentancion incompleta
 *              
 *     responses:
 *          '201':
 *             description: devolution created
 *          '500':
 *             description: Server error
 */
router.post('/', async (req, res) => {
    await devolutionController.insertDevolution(req, res);
});



/**
 * @swagger
 * /api/v1/devolution:
 *   get:
 *     tags:
 *       - Devolution
 *     summary: Get all Devolution registered in the database
 *     description: List of all devolution.
 *     responses:
 *       '200':
 *         description: devolution found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   format: int64
 *                   example: 1
 *                 email:
 *                   type: string
 *                   format: description
 *                   example: Documentacion incompleta
 *        
 */
router.get('/', async (req, res) => {
    await devolutionController.listAllDevolution(req, res);
});

/**
 * @swagger
 * /api/v1/devolution:
 *   put:
 *     tags:
 *      - Devolution
 *     summary: Update devolution
 *     description: Update info of devolution.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Documentacion incompleta
 *              
 *     responses:
 *          '200':
 *             description: devolution created
 *          '500':
 *             description: Server error
 */
router.put('/', async (req, res) => {
    await devolutionController.updateDevolutionInfo(req, res);
});


/**
 * @swagger
 * /api/v1/devolution/{id}:
 *   delete:
 *     tags:
 *       - Devolution
 *     summary: Delete Devolution by id
 *     description: Delete register of devolution.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of user
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Devolution deleted
 *       '404':
 *         description: Devolution not found
 *       '500':
 *         description: Server internal error
 */
router.delete('/:id', async (req, res) => {
    await devolutionController.deleteDevolutionById(req, res);
});

module.exports = router;
