const express = require('express');
const router = express.Router();

const TypeDocumentsRepository = require('../repository/typeDocuments.repository');
const CreateTypeDocumentsUseCase = require('../../usecase/create.usecase');
const ListTypeDocumentssUseCase = require('../../usecase/list.usecase');
const UpdateTypeDocumentsUseCase = require('../../usecase/update.usecase');
const DeletetypeDocumentsUsecase = require('../../usecase/delete.usecase');
const TypeDocumentsController = require('../controller/typeDocuments.controller');

const typeDoumentsRepository = new TypeDocumentsRepository();
const createTypeDocumentsUseCase = new CreateTypeDocumentsUseCase(typeDoumentsRepository);
const listTypeDocumentsUseCase = new ListTypeDocumentssUseCase(typeDoumentsRepository);
const updatTypeDocumentsUseCase = new UpdateTypeDocumentsUseCase(typeDoumentsRepository);
const deleteTypeDocumentsUseCase = new DeletetypeDocumentsUsecase(typeDoumentsRepository);
const typeDocumentsController = new TypeDocumentsController(
  createTypeDocumentsUseCase,
  listTypeDocumentsUseCase,
  updatTypeDocumentsUseCase,
  deleteTypeDocumentsUseCase,
);

/**
 * @swagger
 * /api/v1/typeDocuments:
 *   post:
 *     tags:
 *      - TypeDocuments
 *     summary: Insert new typeDocuments
 *     description: Save typeDocuments into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Cedula
 *     responses:
 *          '201':
 *             description: TypeDocuments created
 *          '500':
 *             description: Server error
 */
router.post('/', async (req, res) => {
  await typeDocumentsController.insertTypeDocuments(req, res);
});

/**
 * @swagger
 * /api/v1/typeDocuments:
 *   get:
 *     tags:
 *       - TypeDocuments
 *     summary: Get all TypeDocuments registered in the database
 *     description: List of all typeDocuments.
 *     responses:
 *       '200':
 *         description: TypeDocuments found
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
 *                   example: Cedula
 */
router.get('/', async (req, res) => {
  await typeDocumentsController.listAllTypeDocuments(req, res);
});

/**
 * @swagger
 * /api/v1/typeDocuments:
 *   put:
 *     tags:
 *      - TypeDocuments
 *     summary: Update typeDocuments
 *     description: Update info of typeDocuments.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Cedula
 *     responses:
 *          '200':
 *             description: TypeDocuments created
 *          '500':
 *             description: Server error
 */
router.put('/', async (req, res) => {
  await typeDocumentsController.updateTypeDocumentdInfo(req, res);
});

/**
 * @swagger
 * /api/v1/typeDocuments/{id}:
 *   delete:
 *     tags:
 *       - TypeDocuments
 *     summary: Delete typeDocuments by id
 *     description: Delete register of typeDocuments.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of typeDocuments
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: TypeDocuments deleted
 *       '404':
 *         description: TypeDocuments not found
 *       '500':
 *         description: Server internal error
 */
router.delete('/:id', async (req, res) => {
  await typeDocumentsController.deleteTypeDocumentsById(req, res);
});

module.exports = router;
