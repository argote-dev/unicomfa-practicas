const express = require('express');
const router = express.Router();

const TypeMunicipalityRepository = require('../repository/typeMunicipality.repository');
const CreateTypeMuncipalityUseCase = require('../../usecase/create.usecase');
const ListTypeMunicipalityUseCase = require('../../usecase/list.usecase');
const UpdateTypeMunicipalityUseCase = require('../../usecase/update.usecase');
const DeleteTypeMuncipalityUsecase = require('../../usecase/delete.usecase');
const TypeMunicipalityController = require('../controller/typeMunicipality.controller');


const typeMunicipalityRepository = new TypeMunicipalityRepository();
const createTypeMunicipalityUseCase = new CreateTypeMuncipalityUseCase(typeMunicipalityRepository);
const listTypeMunicipalityUseCase = new ListTypeMunicipalityUseCase(typeMunicipalityRepository);
const updateTypeMuncipalityUseCase = new UpdateTypeMunicipalityUseCase(typeMunicipalityRepository);
const deleteTypeMunicipalityUseCase = new DeleteTypeMuncipalityUsecase(typeMunicipalityRepository);
const typeMunicipalityController = new TypeMunicipalityController(createTypeMunicipalityUseCase, listTypeMunicipalityUseCase, 
    updateTypeMuncipalityUseCase, deleteTypeMunicipalityUseCase);

/**
 * @swagger
 * /api/v1/typeMunicipality:
 *   post:
 *     tags:
 *      - TypeMunicipality
 *     summary: Insert new typeMunicipality
 *     description: Save typeMunicipality into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Cauca
 *              typeDepartmentId:
 *                 type: int
 *                 example: 1
 *     responses:
 *          '201':
 *             description: TypeMunicipality created
 *          '500':
 *             description: Server error
 */
router.post('/', async (req, res) => {
  await typeMunicipalityController.insertTypeMunicipality(req, res);
});

/**
 * @swagger
 * /api/v1/typeMunicipality:
 *   get:
 *     tags:
 *       - TypeMunicipality
 *     summary: Get all typeMunicipality registered in the database
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
 *                 name:
 *                   type: string
 *                   example: Cauca
 *                 typeDepartmentId:
 *                   type: int
 *                   example: 1
 */
router.get('/', async (req, res) => {
  await typeMunicipalityController.listAllTypeMunicipality(req, res);
});

/**
 * @swagger
 * /api/v1/typeMunicipality:
 *   put:
 *     tags:
 *      - TypeMunicipality
 *     summary: Update typeMunicipality
 *     description: Update info of typeMunicipality.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                 name:
 *                   type: string
 *                   example: Cauca
 *                 typeDepartmentId:
 *                   type: int
 *                   example: 1
 *     responses:
 *          '200':
 *             description: TypeMunicipality created
 *          '500':
 *             description: Server error
 */
router.put('/', async (req, res) => {
  await typeMunicipalityController.updateTypeMunicipalityInfo(req, res);
});

/**
 * @swagger
 * /api/v1/typeMunicipality/{id}:
 *   delete:
 *     tags:
 *       - TypeMunicipality
 *     summary: Delete typeMunicipality by id
 *     description: Delete register of typeMunicipality.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of typeMunicipality
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: TypeMunicipality deleted
 *       '404':
 *         description: TypeMunicipality not found
 *       '500':
 *         description: Server internal error
 */
router.delete('/:id', async (req, res) => {
  await typeMunicipalityController.deleteTypeMunicipalityById(req, res);
});

module.exports = router;
