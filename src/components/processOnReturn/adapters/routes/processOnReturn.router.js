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
 * api/v1/processOnReturn:
 *   post:
 *     tags:
 *      - ProcessOnReturn
 *     summary: Insert new processOnReturn
 *     description: Save processOnReturn into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              process_Id
 *                 type: int
 *                 example: 1
 *               return_Id 
 *                 type: int
 *                 example: 1          
 *     responses:
 *          '201':
 *             description: ProcessOnReturn created
 *          '500':
 *             description: Server error
 */

router.post('/', async (req, res) => {
  await processOnReturnController.insertProcessOnReturn(req, res);
});

/**
* @swagger
* /api/v1/processOnReturn:
*   get:
*     tags:
*       - ProcessOnReurn
*     summary: Get all processOnReturn registered in the database
*     description: List of all processOnReturn.
*     responses:
* 
*       '200':
*         description: ProcessOnReturn found
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 process_Id
*                   type: int
*                   example: 1
*                 return_Id 
*                   type: int
*                   example: 1    
*                
*/
router.get('/', async (req, res) => {
  await ProcessOnReturnController.listAllProcessOnReturn(req, res);
});

/**
* @swagger
* api/v1/proccessOnReturn:
*   put:
*     tags:
*      - Process
*     summary: Update processOnReturn
*     description: Update info of processOnReturn.
*/
router.put('/', (req, res) => {
  res.send('PUT');
});

/**
* @swagger
* api/v1/processOnReturn:
*   delete:
*     tags:
*      - ProcessOnReturn
*     summary: Delete processOnReturn by id
*     description: Delete register of user.
*/
router.delete('/', (req, res) => {
  res.send('DELETE');
});

module.exports = router;
