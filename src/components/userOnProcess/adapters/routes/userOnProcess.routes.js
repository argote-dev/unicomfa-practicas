const express = require('express');
const router = express.Router();

const UserOnProcessRepository = require('../repository/userOnProcess.repository');
const CreateUserOnProcessUseCase = require('../../usecase/create.usecase');
const ListUserOnProcessUseCase = require('../../usecase/list.usecase');
const UpdateUserOnProcessUseCase = require('../../usecase/update.usecase');
const DeleteUserOnProcessUsecase = require('../../usecase/delete.usecase');
const UserOnProcessController = require('../controller/userOnProcess.contoller');

const userOnProcessRepository = new UserOnProcessRepository();
const createUserOnProcessUseCase = new CreateUserOnProcessUseCase(userOnProcessRepository);
const listUserOnProcessUseCase = new ListUserOnProcessUseCase(userOnProcessRepository);
const updatUserOnProcessUseCase = new UpdateUserOnProcessUseCase(userOnProcessRepository);
const deleteUserOnProcessUseCase = new DeleteUserOnProcessUsecase(userOnProcessRepository);
const userOnProcessController = new UserOnProcessController(createUserOnProcessUseCase, listUserOnProcessUseCase, updatUserOnProcessUseCase, deleteUserOnProcessUseCase);

/**
 * @swagger
 * /api/v1/userOnProcess:
 *   post:
 *     tags:
 *      - UserOnProcess
 *     summary: Insert new userOnProcess
 *     description: Save userOnProcess into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              userId:
 *                type: int
 *                example: 1
 *              processId:
 *                type: int
 *                example: 1
 *     responses:
 *          '201':
 *             description: UserOnProcess created
 *          '500':
 *             description: Server error
 */
router.post('/', async (req, res) => {
    await userOnProcessController.insertUserOnProcess(req, res);
});

/**
 * @swagger
 * /api/v1/userOnProcess:
 *   get:
 *     tags:
 *       - UserOnProcess
 *     summary: Get all userOnProcess registered in the database
 *     description: List of all userOnProcess.
 *     responses:
 *       '200':
 *         description: UserOnProcess found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   format: int64
 *                   example: 1
 *                 userId:
 *                   type: int
 *                   example: 1
 *                 processId:
 *                   type: int
 *                   example: 1
 */
router.get('/', async (req, res) => {
    await userOnProcessController.listAllUserOnProcess(req, res);
});

/**
 * @swagger
 * /api/v1/userOnProcess:
 *   put:
 *     tags:
 *      - UserOnProcess
 *     summary: Update userOnProcess
 *     description: Update info of userOnProcess.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              userId:
 *                type: int
 *                example: 1
 *              processId:
 *                type: int
 *                example: 1
 *     responses:
 *          '200':
 *             description: User created
 *          '500':
 *             description: Server error
 */
router.put('/', async (req, res) => {
    await userOnProcessController.updateUserOnProcessInfo(req, res);
});

/**
 * @swagger
 * /api/v1/userOnProcess/{id}:
 *   delete:
 *     tags:
 *       - UserOnProcess
 *     summary: Delete userOnProcess by id
 *     description: Delete register of userOnProcess.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of userOnProcess
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: UserOnProcess deleted
 *       '404':
 *         description: UserOnProcess not found
 *       '500':
 *         description: Server internal error
 */
router.delete('/:id', async (req, res) => {
    await userOnProcessController.deleteUserOnProcessById(req, res);
});

module.exports = router;
