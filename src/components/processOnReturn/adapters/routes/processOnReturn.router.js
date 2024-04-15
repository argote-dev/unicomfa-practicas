const express = require('express');
const router = express.Router();

const ProcessOnReturnRepository = require('../repository/processOnReturn.repository');
const createProcessOnReturnUseCase = require('../../usecase/create.usecase');
const ListProcessOnReturnUseCase = require('../../usecase/list.usecase');
const ProcessOnReturnController = require('../controller/processOnReturn.controller');

const processOnReturnRepository = new ProcessOnReturnRepository();
const createProcessOnReturnUseCase = new ListProcessOnReturnUseCase(processOnReturnRepository);
const listProcessOnReturnUseCase = new ListProcessOnReturnUseCase(processOnReturnRepository);
const processOnReturnController = new ProcessOnReturnController(createProcessOnReturnUseCase, listProcessOnReturnUseCase);

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
  await processOnReturnController.insertUser(req, res);
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
  await ProcessOnReturnController.listAllUsers(req, res);
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
