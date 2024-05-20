const express = require('express');
const router = express.Router();

const ProcessOnReturnRepository = require('../repository/processOnReturn.repository');
const CreateProcessOnReturnUseCase = require('../../usecase/create.usecase');
const ListProcessOnReturnUseCase = require('../../usecase/list.usecase');
const UpdateProcessOnReturnUseCase = require('../../usecase/update.usecase');
const DeleteProcessOnReturnUsecase = require('../../usecase/delete.usecase');
const ProcessOnReturnController = require('../controller/processOnReturn.controller');


const processOnReturnRepository = new ProcessOnReturnRepository();
const createProcessOnReturnUseCase = new CreateProcessOnReturnUseCase(processOnReturnRepository);
const listProcessOnReturnUseCase = new ListProcessOnReturnUseCase(processOnReturnRepository);
const updatProcessOnReturnUseCase = new UpdateProcessOnReturnUseCase(processOnReturnRepository);
const deleteProcessOnReturnUseCase = new DeleteProcessOnReturnUsecase(processOnReturnRepository);
const processOnReturnController = new ProcessOnReturnController(createProcessOnReturnUseCase,
  listProcessOnReturnUseCase, updatProcessOnReturnUseCase, deleteProcessOnReturnUseCase);

/**
 * @swagger
 * /api/v1/processOnReturn:
 *   post:
 *     tags:
 *      - ProcessOnReturn
 *     summary: Insert new processOnReturn
 *     description: Save processOnReturn into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              process_Id:
 *                 type: int64
 *                 example: 1
 *              return_Id:
 *                 type: int64
 *                 example: 1
 *     responses:
 *          '201':
 *             description: ProcessOnReturn created
 *          '500':
 *             description: Server error
 */

router.post('/', async (req, res) => {
  await processOnReturnController.insertProcessOnReturn(req, res);
});

/**
 * @swagger
 * /api/v1/processOnReturn:
 *   get:
 *     tags:
 *       - ProcessOnReturn
 *     summary: Get all processOnReturn registered in the database
 *     description: List of all processOnReturn.
 *     responses:
 *       '200':
 *         description: ProcessOnReturn found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   format: int64
 *                   example: 1
 *                 process_Id:
 *                   type: int64
 *                   example: 1
 *                 return_Id:
 *                   type: int64
 *                   example: 1
 *
 */
router.get('/', async (req, res) => {
  await processOnReturnController.listAllProcessOnReturn(req, res);
});

/**
 * @swagger
 * /api/v1/processOnReturn:
 *   put:
 *     tags:
 *      - ProcessOnReturn
 *     summary: Update proccesOnReturn
 *     description: Update info of proccesOnReturn.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *             process_Id:
 *                 type: int64
 *                 example: 1
 *             return_Id:
 *                 type: int64
 *                 example: 1
 *
 *     responses:
 *          '200':
 *             description: proccesOnReturn created
 *          '500':
 *             description: Server error
 */
router.put('/', async (req, res) => {
  await processOnReturnController.updateProcesOnReturnInfo(req, res);
});

/**
 * @swagger
 *  /api/v1/processOnReturn/{id}:
 *   delete:
 *     tags:
 *       - ProcessOnReturn
 *     summary: Delete user by id
 *     description: Delete register of proccesOnReturn.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of proccesOnReturn
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: proccesOnReturn deleted
 *       '404':
 *         description: proccesOnReturn not found
 *       '500':
 *         description: Server internal error
 */
router.delete('/:id', async (req, res) => {
  await processOnReturnController.deleteProcessOnReturnById(req, res);
});
module.exports = router;
