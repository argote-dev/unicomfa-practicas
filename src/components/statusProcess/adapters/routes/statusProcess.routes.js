const express = require('express');
const router = express.Router();

const StatusProcessRepository = require('../repository/statusProcess.repository');
const CreateStatusProcessUseCase = require('../../usecase/create.usecase');
const ListStatusProcessUseCase = require('../../usecase/list.usecase');
const UpdateStatusProcessUseCase = require('../../usecase/update.usecase');
const DeleteStatusProcessUsecase = require('../../usecase/delete.usecase');
const StatusProcessController = require('../controller/statusProcess.controller');

const statusProcessRepository = new StatusProcessRepository();
const createStatusProcessUseCase = new CreateStatusProcessUseCase(statusProcessRepository);
const listStatusProcessUseCase = new ListStatusProcessUseCase(statusProcessRepository);
const updatStatusProcessUseCase = new UpdateStatusProcessUseCase(statusProcessRepository);
const deleteStatusProcessUseCase = new DeleteStatusProcessUsecase(statusProcessRepository);
const statusProcessController = new StatusProcessController(
  createStatusProcessUseCase,
  listStatusProcessUseCase,
  updatStatusProcessUseCase,
  deleteStatusProcessUseCase,
);

/**
 * @swagger
 * /api/v1/statusProcess:
 *   post:
 *     tags:
 *      - StatusProcess
 *     summary: Insert new statusProcess
 *     description: Save statusProcess into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: En Revisión
 *     responses:
 *          '201':
 *             description: StatusProcess created
 *          '500':
 *             description: Server error
 */
router.post('/', async (req, res) => {
  await statusProcessController.insertStatusProcess(req, res);
});

/**
 * @swagger
 * /api/v1/statusProcess:
 *   get:
 *     tags:
 *       - StatusProcess
 *     summary: Get all StatusProcess registered in the database
 *     description: List of all StatusProcess.
 *     responses:
 *       '200':
 *         description: StatusProcess found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   format: int64
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: En Revisión
 */
router.get('/', async (req, res) => {
  await statusProcessController.listAllStatusProcess(req, res);
});

/**
 * @swagger
 * /api/v1/statusProcess:
 *   put:
 *     tags:
 *      - StatusProcess
 *     summary: Update statusProcess
 *     description: Update info of StatusProcess.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: En Revisión
 *     responses:
 *          '200':
 *             description: StatusProcess created
 *          '500':
 *             description: Server error
 */
router.put('/', async (req, res) => {
  await statusProcessController.updateStatusProcessInfo(req, res);
});

/**
 * @swagger
 * /api/v1/statusProcess/{id}:
 *   delete:
 *     tags:
 *       - StatusProcess
 *     summary: Delete statusProcess by id
 *     description: Delete register of statusProcess.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of statusProcess
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: StatusProcess deleted
 *       '404':
 *         description: StatusProcess not found
 *       '500':
 *         description: Server internal error
 */
router.delete('/:id', async (req, res) => {
  await statusProcessController.deleteStatusProcessById(req, res);
});

module.exports = router;
