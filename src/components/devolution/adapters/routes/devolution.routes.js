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
const DevolutionController = new DevolutionController(createDevolutionUseCase, listDevolutionUseCase, updateDevolutionUseCase, deleteDevolutonUseCase);

/**
 * @swagger
 * api/v1/Devolution:
 *   post:
 *     tags:
 *      - Devolution
 *     summary: Insert new Devolution
 *     description: Save Devolution into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              description:
 *                type: string
 *                example: No tiene la documentacion completa
 *      
 *     responses:
 *          '201':
 *             description: Devolution created
 *          '500':
 *             description: Server error
 */
router.post('/', async (req, res) => {
    await devolutionController.insertDevolution(req, res);
});

/**
 * @swagger
 * /api/v1/Devolution:
 *   get:
 *     tags:
 *       - Devolution
 *     summary: Get all users registered in the database
 *     description: List of all devolution.
 *     responses:
 *       '200':
 *         description: Devolution found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   format: int64
 *                   example: 1
 *                description:
 *                   type: string
 *                   example: No tiene la documentacion completa
 *                
 */
router.get('/', async (req, res) => {
    await devolutionController.listAllDevolution(req, res);
});

/**
 * @swagger
 * api/v1/devolution:
 *   put:
 *     tags:
 *      - Devolution
 *     summary: Update Devolution
 *     description: Update info of return.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              description:
 *                type: string
 *                example: No tiene la documentacion completa
 *             
 *     responses:
 *          '200':
 *             description: Devolution created
 *          '500':
 *             description: Server error
 */
router.put('/', async (req, res) => {
    await devolutionController.updaterDevolutionInfo(req, res);
});

/**
 * @swagger
 * /api/v1/Devolution/{id}:
 *   delete:
 *     tags:
 *       - Devolution
 *     summary: Delete user by id
 *     description: Delete register of Devolution.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of devolution
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
    await DevolutionController.deleteDevolutionById(req, res);
});

module.exports = router;
