const express = require('express');
const router = express.Router();

const TypeDepartmentRepository = require('../repository/typeDepartment.repository');
const CreateTypeDepartmentUseCase = require('../../usecase/create.usecase');
const ListTypeDepartmentUseCase = require('../../usecase/list.usecase');
const UpdateTypeDepartmentUseCase = require('../../usecase/update.usecase');
const DeleteTypeDepartmentUsecase = require('../../usecase/delete.usecase');
const TypeDepartmentController = require('../controller/typeDepartment.controller');

const typeDepartmentRepository = new TypeDepartmentRepository();
const createTypeDepartmentUseCase = new CreateTypeDepartmentUseCase(typeDepartmentRepository);
const listTypeDepartmentUseCase = new ListTypeDepartmentUseCase(typeDepartmentRepository);
const updateTypeDepartmentUseCase = new UpdateTypeDepartmentUseCase(typeDepartmentRepository);
const deleteTypeDepartmentUseCase = new DeleteTypeDepartmentUsecase(typeDepartmentRepository);
const typeDepartmentController = new TypeDepartmentController(
  createTypeDepartmentUseCase,
  listTypeDepartmentUseCase,
  updateTypeDepartmentUseCase,
  deleteTypeDepartmentUseCase,
);

/**
 * @swagger
 * /api/v1/typeDepartment:
 *   post:
 *     tags:
 *      - TypeDepartment
 *     summary: Insert new typeDepartment
 *     description: Save typeDepartment into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Popayán
 *     responses:
 *          '201':
 *             description: typeDepartment created
 *          '500':
 *             description: Server error
 */
router.post('/', async (req, res) => {
  await typeDepartmentController.insertTypeDepartment(req, res);
});

/**
 * @swagger
 * /api/v1/typeDepartment:
 *   get:
 *     tags:
 *       - TypeDepartment
 *     summary: Get all TypeDepartment registered in the database
 *     description: List of all typeDepartment.
 *     responses:
 *       '200':
 *         description: TypeDepartment found
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
 *                   example: Popayán
 */
router.get('/', async (req, res) => {
  await typeDepartmentController.listAllTypeDepartment(req, res);
});

/**
 * @swagger
 * /api/v1/typeDepartment:
 *   put:
 *     tags:
 *      - TypeDepartment
 *     summary: Update typeDepartment
 *     description: Update info of typeDepartment.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Popayán
 *     responses:
 *          '200':
 *             description: TypeDepartment created
 *          '500':
 *             description: Server error
 */
router.put('/', async (req, res) => {
  await typeDepartmentController.updateTypeDepartmentInfo(req, res);
});

/**
 * @swagger
 * /api/v1/typeDepartment/{id}:
 *   delete:
 *     tags:
 *       - TypeDepartment
 *     summary: Delete typeDepartment by id
 *     description: Delete register of typeDepartment.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of typeDepartment
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: TypeDepartment deleted
 *       '404':
 *         description: TypeDepartment not found
 *       '500':
 *         description: Server internal error
 */
router.delete('/:id', async (req, res) => {
  await typeDepartmentController.deleteTypeDepartmentById(req, res);
});

module.exports = router;
