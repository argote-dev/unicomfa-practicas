const express = require('express');
const router = express.Router();

const TypeUserRepository = require('../repository/typeUser.repository');
const CreateTypeUserUseCase = require('../../usecase/create.usecase');
const ListTypeUserUseCase = require('../../usecase/list.usecase');
const UpdateTypeUserUseCase = require('../../usecase/update.usecase');
const DeleteTypeUserUsecase = require('../../usecase/delete.usecase');
const TypeUserController = require('../controller/typeUser.controller');

const typeUserRepository = new TypeUserRepository();
const createTypeUserUseCase = new CreateTypeUserUseCase(typeUserRepository);
const listTypeUserUseCase = new ListTypeUserUseCase(typeUserRepository);
const updatTypeUserUseCase = new UpdateTypeUserUseCase(typeUserRepository);
const deleteTypeUserUseCase = new DeleteTypeUserUsecase(typeUserRepository);
const typeUserController = new TypeUserController(createTypeUserUseCase, listTypeUserUseCase, updatTypeUserUseCase, deleteTypeUserUseCase);

/**
 * @swagger
 * api/v1/typeUser:
 *   post:
 *     tags:
 *      - TypeUser
 *     summary: Insert new typeUser
 *     description: Save user into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Estudiante
 *              
 *     responses:
 *          '201':
 *             description: TypeUser created
 *          '500':
 *             description: Server error
 */
router.post('/', async (req, res) => {
  await typeUserController.insertTypeUser(req, res);
});

/**
 * @swagger
 * /api/v1/typeUser:
 *   get:
 *     tags:
 *       - TypeUser
 *     summary: Get all typeUser registered in the database
 *     description: List of all typeUser.
 *     responses:
 *       '200':
 *         description: TypeUser found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   format: int64
 *                   example: 1
 *                 
 *                 name:
 *                   type: string
 *                   example: Estudiante
 *                 
 */
router.get('/', async (req, res) => {
  await typeUserController.listAllTypeUser(req, res);
});

/**
 * @swagger
 * api/v1/typeUser:
 *   put:
 *     tags:
 *      - TypeUser
 *     summary: Update typeUser
 *     description: Update info of typeUser.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Estudiante
 *              
 *     responses:
 *          '200':
 *             description: TypeUser created
 *          '500':
 *             description: Server error
 */
router.put('/', async (req, res) => {
  await typeUserController.updateTypeUserInfo(req, res);
});

/**
 * @swagger
 * /api/v1/typeUser/{id}:
 *   delete:
 *     tags:
 *       - TypeUser
 *     summary: Delete typeUser by id
 *     description: Delete register of typeUser.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of typeUser
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: TypeUser deleted
 *       '404':
 *         description: TypeUser not found
 *       '500':
 *         description: Server internal error
 */
router.delete('/:id', async (req, res) => {
  await typeUserController.deleteTypeUserById(req, res);
});

module.exports = router;