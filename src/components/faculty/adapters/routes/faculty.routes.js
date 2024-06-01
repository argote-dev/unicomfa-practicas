const express = require('express');
const router = express.Router();

const FacultyRepository = require('../repository/faculty.repository');
const CreateFacultyUseCase = require('../../usecase/create.usecase');
const ListFacultyUseCase = require('../../usecase/list.usecase');
const UpdateFacultyUseCase = require('../../usecase/update.usecase');
const DeleteFacultyUsecase = require('../../usecase/delete.usecase');
const FacultyController = require('../controller/faculty.controller');

const facultyRepository = new FacultyRepository();
const createFacultyUseCase = new CreateFacultyUseCase(facultyRepository);
const listFacultyUseCase = new ListFacultyUseCase(facultyRepository);
const updatFacultyUseCase = new UpdateFacultyUseCase(facultyRepository);
const deleteFacultyUseCase = new DeleteFacultyUsecase(facultyRepository);
const facultyController = new FacultyController(
  createFacultyUseCase,
  listFacultyUseCase,
  updatFacultyUseCase,
  deleteFacultyUseCase,
);

/**
 * @swagger
 * /api/v1/faculty:
 *   post:
 *     tags:
 *      - Faculty
 *     summary: Insert new faculty
 *     description: Save faculty into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Facultad de Ingenierias
 *     responses:
 *          '201':
 *             description: faculty created
 *          '500':
 *             description: Server error
 */
router.post('/', async (req, res) => {
  await facultyController.insertFaculty(req, res);
});

/**
 * @swagger
 * /api/v1/faculty:
 *   get:
 *     tags:
 *       - Faculty
 *     summary: Get all faculty registered in the database
 *     description: List of all faculty.
 *     responses:
 *       '200':
 *         description: Faculty found
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
 *                   example: Facultad de Ingenierias
 */
router.get('/', async (req, res) => {
  await facultyController.listAllFaculty(req, res);
});

/**
 * @swagger
 * /api/v1/faculty:
 *   put:
 *     tags:
 *      - Faculty
 *     summary: Update faculty
 *     description: Update info of faculty.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                 name:
 *                   type: string
 *                   example: Facultad de Ingenierias
 *     responses:
 *          '200':
 *             description: Faculty created
 *          '500':
 *             description: Server error
 */
router.put('/', async (req, res) => {
  await facultyController.updateFacultyInfo(req, res);
});

/**
 * @swagger
 * /api/v1/faculty/{id}:
 *   delete:
 *     tags:
 *       - Faculty
 *     summary: Delete faculty by id
 *     description: Delete register of faculty.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of faculty
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Faculty deleted
 *       '404':
 *         description: Faculty not found
 *       '500':
 *         description: Server internal error
 */
router.delete('/:id', async (req, res) => {
  await facultyController.deleteFacultyById(req, res);
});

module.exports = router;
