const express = require('express');
const router = express.Router();

const ProcessRepository = require('../repository/process.repository');
const CreateProcessUseCase = require('../../usecase/create.usecase');
const ListProcessUseCase = require('../../usecase/list.usecase');
const ProcessController = require('../controller/process.controller');

const processRepository = new ProcessRepository();
const createProcessUseCase = new CreateProcessUseCase(processRepository);
const listProcessUseCase = new ListProcessUseCase(processRepository);
const processController = new ProcessController(createProcessUseCase, listProcessUseCase);

/**
 * @swagger
 * api/v1/users:
 *   post:
 *     tags:
 *      - Process
 *     summary: Insert new user
 *     description: Save user into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *             
 *     responses:
 *          '201':
 *             description: User created
 *          '500':
 *             description: Server error
 */

router.post('/', async (req, res) => {
    await userController.insertUser(req, res);
  });

  /**
 * @swagger
 * /api/v1/users:
 *   get:
 *     tags:
 *       - Process
 *     summary: Get all users registered in the database
 *     description: List of all users.
 *     responses:
 * 
 *       '200':
 *         description: Users found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                
 */
  router.get('/', async (req, res) => {
    await processController.listAllUsers(req, res);
  });

  /**
 * @swagger
 * api/v1/users:
 *   put:
 *     tags:
 *      - Process
 *     summary: Update user
 *     description: Update info of user.
 */
router.put('/', (req, res) => {
    res.send('PUT');
  });

  /**
 * @swagger
 * api/v1/users:
 *   delete:
 *     tags:
 *      - Users
 *     summary: Delete user by id
 *     description: Delete register of user.
 */
router.delete('/', (req, res) => {
    res.send('DELETE');
  });
  
  module.exports = router;
  