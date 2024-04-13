const express = require('express');
const router = express.Router();

const UserRepository = require('../repository/user.repository');
const CreateUserUseCase = require('../../usecase/create.usecase');
const UserController = require('../controller/user.controller');

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const userController = new UserController(createUserUseCase);

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
 *                type: string
 *                example: 18/06/2000
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
 * api/v1/users:
 *   get:
 *     tags:
 *      - Users
 *     summary: Get all users register in db
 *     description: List of all users.
 */
router.get('/', (req, res) => {
  res.send('GET');
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
