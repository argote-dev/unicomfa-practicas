const express = require('express');
const router = express.Router();

const TypeProcessRepository = require('../repository/typeProcess.repository');
const CreateTypeProcessUseCase = require('../../usecase/create.usecase');
const ListTypeProcessUseCase = require('../../usecase/list.usecase');
const UpdateTypeProcessUseCase = require('../../usecase/update.usecase');
const DeleteTypeProcessUsecase = require('../../usecase/delete.usecase');
const TypeProcessController = require('../controller/typeProcess.controller');

const typeProcessRepository = new TypeProcessRepository();
const createTypeProcesUseCase = new CreateTypeProcessUseCase(typeProcessRepository);
const listTypeProcessUseCase = new ListTypeProcessUseCase(typeProcessRepository);
const updatTypeProcessUseCase = new UpdateTypeProcessUseCase(typeProcessRepository);
const deleteTypeProcessUseCase = new DeleteTypeProcessUsecase(typeProcessRepository);
const typeProcessController = new TypeProcessController(createTypeProcesUseCase, listTypeProcessUseCase, updatTypeProcessUseCase, deleteTypeProcessUseCase);

/**
 * @swagger
 * /api/v1/typeProcess:
 *   post:
 *     tags:
 *      - TypeProcess
 *     summary: Insert new typeProcess
 *     description: Save typeProcess into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Practica aceptada
 *     responses:
 *          '201':
 *             description: TypeProcess created
 *          '500':
 *             description: Server error
 */
router.post('/', async (req, res) => {
  await typeProcessController.insertTypeProcess(req, res);
});

/**
 * @swagger
 * /api/v1/typeProcess:
 *   get:
 *     tags:
 *       - TypeProcess
 *     summary: Get all typeProcess registered in the database
 *     description: List of all typeProcess.
 *     responses:
 *       '200':
 *         description: TypeProcess found
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
 *                   example: Practica aceptada
 */
router.get('/', async (req, res) => {
  await typeProcessController.listAllTypeProcess(req, res);
});

/**
 * @swagger
 * /api/v1/typeProcess:
 *   put:
 *     tags:
 *      - TypeProcess
 *     summary: Update typeProcess
 *     description: Update info of typeProcess.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Pratica acetada
 *     responses:
 *          '200':
 *             description: TypeProcess created
 *          '500':
 *             description: Server error
 */
router.put('/', async (req, res) => {
  await typeProcessController.updateTypeProcessInfo(req, res);
});

/**
 * @swagger
 * /api/v1/typeProcess/{id}:
 *   delete:
 *     tags:
 *       - TypeProcess
 *     summary: Delete typeProcess by id
 *     description: Delete register of typeProcess.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of typeProcess
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: TypeProcess deleted
 *       '404':
 *         description: TypeProcess not found
 *       '500':
 *         description: Server internal error
 */
router.delete('/:id', async (req, res) => {
  await typeProcessController.deleteTypeProcessById(req, res);
});

module.exports = router;
