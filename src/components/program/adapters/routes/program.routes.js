const express = require('express');
const router = express.Router();

const ProgramRepository = require('../repository/program.repository');
const CreateProgtamUseCase = require('../../usecase/create.usecase');
const ListProgramUseCase = require('../../usecase/list.usecase');
const UpdateProgramUseCase = require('../../usecase/update.usecase');
const DeleteProgramUsecase = require('../../usecase/delete.usecase');
const ProgramController = require('../controller/program.controller');

const userRepository = new ProgramRepository();
const createProgramUseCase = new CreateProgtamUseCase(userRepository);
const listProgramUseCase = new ListProgramUseCase(userRepository);
const updatProgramUseCase = new UpdateProgramUseCase(userRepository);
const deleteProgramUseCase = new DeleteProgramUsecase(userRepository);
const programController = new ProgramController(
  createProgramUseCase,
  listProgramUseCase,
  updatProgramUseCase,
  deleteProgramUseCase,
);

/**
 * @swagger
 * /api/v1/program:
 *   post:
 *     tags:
 *      - Program
 *     summary: Insert new program
 *     description: Save program into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Ingenieria de sistemas
 *              idFaculty:
 *                type: int
 *                example: null
 *     responses:
 *          '201':
 *             description: Program created
 *          '500':
 *             description: Server error
 */
router.post('/', async (req, res) => {
  await programController.insertProgram(req, res);
});

/**
 * @swagger
 * /api/v1/program:
 *   get:
 *     tags:
 *       - Program
 *     summary: Get all Program registered in the database
 *     description: List of all program.
 *     responses:
 *       '200':
 *         description: Program found
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
 *                   example: Ingenieria de Sistemas
 *                 idFaculty:
 *                  type: int
 *                  example: null
 */
router.get('/', async (req, res) => {
  await programController.listAllProgram(req, res);
});

/**
 * @swagger
 * /api/v1/program:
 *   put:
 *     tags:
 *      - Program
 *     summary: Update user
 *     description: Update info of program.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Ingenieria de sistemas
 *              idFaculty:
 *                type: int
 *                example: null
 *     responses:
 *          '200':
 *             description: Program created
 *          '500':
 *             description: Server error
 */
router.put('/', async (req, res) => {
  await programController.updateProgramInfo(req, res);
});

/**
 * @swagger
 * /api/v1/program/{id}:
 *   delete:
 *     tags:
 *       - Program
 *     summary: Delete program by id
 *     description: Delete register of program.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of program
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Program deleted
 *       '404':
 *         description: Program not found
 *       '500':
 *         description: Server internal error
 */
router.delete('/:id', async (req, res) => {
  await programController.deleteProgramById(req, res);
});

module.exports = router;
