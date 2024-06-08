const express = require('express');
const router = express.Router();

const ProcessRepository = require('../repository/process.repository');
const CreateProcessUseCase = require('../../usecase/insertProcess.usecase');
const UpdateProcessUseCase = require('../../usecase/insertProcess.usecase');
const GetProcessUseCase = require('../../usecase/insertProcess.usecase');
const AllProcessUseCase = require('../../usecase/insertProcess.usecase');
const DeleteProcessUseCase = require('../../usecase/deleteProcess.usecase');
const ProcessController = require('../controller/process.controller');

const processRepository = new ProcessRepository();
const createUseCase = new CreateProcessUseCase(processRepository);
const updateUseCase = new UpdateProcessUseCase(processRepository);
const getUseCase = new GetProcessUseCase(processRepository);
const allUseCase = new AllProcessUseCase(processRepository);
const deleteUseCase = new DeleteProcessUseCase(processRepository);
const processController = new ProcessController(createUseCase, getUseCase, allUseCase, updateUseCase, deleteUseCase);

/**
 * @swagger
 * /api/v1/process:
 *   post:
 *     tags:
 *      - Process
 *     summary: Insert new process
 *     description: Save process into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              type:
 *                type: int
 *                example: 1
 *              status:
 *                type: int
 *                example: 1
 *     responses:
 *          '201':
 *             description: Process created
 *          '500':
 *             description: Server error
 */
router.post('/', async (req, res) => {
  await processController.insertProgram(req, res);
});

/**
 * @swagger
 * /api/v1/process:
 *   put:
 *     tags:
 *      - Process
 *     summary: Update new process
 *     description: Update process into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              type:
 *                type: int
 *                example: 1
 *              status:
 *                type: int
 *                example: 1
 *              approved:
 *                type: boolean
 *                example: false
 *     responses:
 *          '200':
 *             description: Update process
 *          '500':
 *             description: Server error
 */
router.put('/', async (req, res) => {
  await processController.update(req, res);
});

/**
 * @swagger
 * /api/v1/process:
 *   get:
 *     tags:
 *       - Process
 *     summary: Get all Process registered in the database
 *     description: List of all Process.
 *     responses:
 *       '200':
 *         description: Process found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   format: int64
 *                   example: 1
 *                 status:
 *                   type: int
 *                   example: 1
 *                 type:
 *                  type: int
 *                  example: 1
 *                 approved:
 *                  type: boolean
 *                  example: false
 */
router.get('/', async (req, res) => {
  await processController.list(req, res);
});

/**
 * @swagger
 * /api/v1/process/{id}:
 *   get:
 *     tags:
 *       - Process
 *     summary: Get Process registered in the database
 *     description: List of process.
 *     responses:
 *       '200':
 *         description: Process found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   format: int64
 *                   example: 1
 *                 status:
 *                   type: int
 *                   example: 1
 *                 type:
 *                  type: int
 *                  example: 1
 *                 approved:
 *                  type: boolean
 *                  example: false
 */
router.get('/:id', async (req, res) => {
  await processController.get(req, res);
});

/**
 * @swagger
 * /api/v1/process/{id}:
 *   delete:
 *     tags:
 *       - Process
 *     summary: Delete process by id
 *     description: Delete register of process.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of process
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Process deleted
 *       '404':
 *         description: Process not found
 *       '500':
 *         description: Server internal error
 */
router.delete('/:id', async (req, res) => {
  await processController.remove(req, res);
});

module.exports = router;
