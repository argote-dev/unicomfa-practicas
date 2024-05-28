const express = require('express');
const router = express.Router();

const DocumentsRepository = require('../repository/documents.repository');
const CreateDocumentsUseCase = require('../../usecase/create.usecase');
const ListDocumentsUseCase = require('../../usecase/list.usecase');
const UpdateDocumentsUseCase = require('../../usecase/update.usecase');
const DeleteDocumentsUsecase = require('../../usecase/delete.usecase');
const DocuementsController = require('../controller/documents.controller');

const docuementsRepository = new DocumentsRepository();
const createDocumentsUseCase = new CreateDocumentsUseCase(docuementsRepository);
const listDocumentsUseCase = new ListDocumentsUseCase(docuementsRepository);
const updatDocumentsUseCase = new UpdateDocumentsUseCase(docuementsRepository);
const deleteDocumentsUseCase = new DeleteDocumentsUsecase(docuementsRepository);
const documentsController = new DocuementsController(createDocumentsUseCase, listDocumentsUseCase,
    updatDocumentsUseCase, deleteDocumentsUseCase);

/**
 * @swagger
 * /api/v1/documents:
 *   post:
 *     tags:
 *      - Documents
 *     summary: Insert new documents
 *     description: Save documents into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              url:
 *                type: string
 *                example: asdas
 *              date:
 *                type: datatime
 *                example: 12-12-2023 00:00:00
 *              typeId:
 *                 type: int
 *                 example: 1
 *              userId:
 *                 type: int
 *                 example: 1
 *     responses:
 *          '201':
 *             description: Documents created
 *          '500':
 *             description: Server error
 */
router.post('/', async (req, res) => {
    await documentsController.insertDocuments(req, res);
});

/**
 * @swagger
 * /api/v1/documents:
 *   get:
 *     tags:
 *       - Documents
 *     summary: Get all users registered in the database
 *     description: List of all documents.
 *     responses:
 *       '200':
 *         description: Documents found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   format: int64
 *                   example: 1
 *                 url:
 *                   type: string
 *                   example: asdas
 *                 date:
 *                   type: datatime
 *                   example: 12-12-2023 00:00:00
 *                 typeId:
 *                   type: int
 *                   example: 1
 *                 userId:
 *                   type: int
 *                   example: 1
 */
router.get('/', async (req, res) => {
    await documentsController.listAllDocuments(req, res);
});

/**
 * @swagger
 * /api/v1/documents:
 *   put:
 *     tags:
 *      - Documents
 *     summary: Update documents
 *     description: Update info of documents.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                 url:
 *                   type: string
 *                   example: asdas
 *                 date:
 *                   type: datatime
 *                   example: 12-12-2023 00:00:00
 *                 typeId:
 *                   type: int
 *                   example: 1
 *                 userId:
 *                   type: int
 *                   example: 1
 *     responses:
 *          '200':
 *             description: Documents created
 *          '500':
 *             description: Server error
 */
router.put('/', async (req, res) => {
    await documentsController.updateDocumentsInfo(req, res);
});

/**
 * @swagger
 * /api/v1/documents/{id}:
 *   delete:
 *     tags:
 *       - Documents
 *     summary: Delete documents by id
 *     description: Delete register of documents.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of documents
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Documents deleted
 *       '404':
 *         description: Documents not found
 *       '500':
 *         description: Server internal error
 */
router.delete('/:id', async (req, res) => {
    await documentsController.deleteDocumentsById(req, res);
});

module.exports = router;
