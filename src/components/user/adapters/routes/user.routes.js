const express = require('express');
const router = express.Router();

const UserRepository = require('../repository/user.repository');
const CreateUserUseCase = require('../../usecase/create.usecase');
const ListUsersUseCase = require('../../usecase/list.usecase');
const UserController = require('../controller/user.controller');

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const listUsersUseCase = new ListUsersUseCase(userRepository);
const userController = new UserController(createUserUseCase, listUsersUseCase);

/**
 * @swagger
 * api/v1/users:
 *   post:
 *     tags:
 *      - Users
 *     summary: Insert new user
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
 *                example: David
 *              last_name:
 *                 type: string
 *                 example: Argote
 *              address:
 *                 type: string
 *                 example: Cr 25N
 *              email:
 *                 type: string
 *                 format: email
 *                 example: argote@unicomfacauca.edu.co
 *              birth_date:
 *                 type: string
 *                 example: 18/06/2000
 *              type_document:
 *                 type: int
 *                 example: 1
 *              type_user:
 *                 type: int
 *                 example: 1
 *              type_municipality:
 *                 type: int
 *                 example: 1
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
 *       - Users
 *     summary: Get all users registered in the database
 *     description: List of all users.
 *     responses:
 *       '200':
 *         description: Users found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   format: int64
 *                   example: 1
 *                 email:
 *                   type: string
 *                   format: email
 *                   example: alopez@unicomfacauca.edu.co
 *                 name:
 *                   type: string
 *                   example: Andres
 *                 last_name:
 *                   type: string
 *                   example: Lopez
 *                 address:
 *                   type: string
 *                   example: Calle 2
 *                 birth_date:
 *                   type: string
 *                   format: date
 *                   example: "2000-03-22"
 *                 idProgram:
 *                   type: integer
 *                   format: int64
 *                   nullable: true
 *                   example: null
 *                 create_at:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-04-14T00:51:26.505Z"
 *                 idCompamy:
 *                   type: integer
 *                   format: int64
 *                   nullable: true
 *                   example: null
 *                 idTypeDocument:
 *                   type: integer
 *                   format: int64
 *                   example: 1
 *                 idTypeMunicipality:
 *                   type: integer
 *                   format: int64
 *                   example: 1
 *                 idTypeUser:
 *                   type: integer
 *                   format: int64
 *                   example: 1
 */
router.get('/', async (req, res) => {
  await userController.listAllUsers(req, res);
});

/**
 * @swagger
 * api/v1/users:
 *   put:
 *     tags:
 *      - Users
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
