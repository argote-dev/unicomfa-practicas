const express = require('express');
const router = express.Router();

const AuthRepository = require('../repository/auth.repository');
const LoginUseCase = require('../../usecase/login.usecase');
const AuthController = require('../controller/auth.controller');

const authRepository = new AuthRepository();
const loginUseCase = new LoginUseCase(authRepository);
const authController = new AuthController(loginUseCase);

/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     tags:
 *      - Auth
 *     summary: Register and login a user.
 *     description: Auth user in system, return true of false if user credential is success.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                 type: string
 *                 format: email
 *                 example: argote@unicomfacauca.edu.co
 *              password:
 *                 type: string
 *                 example: 1234567890
 *     responses:
 *          '200':
 *             description: User auth if is true
 *          '500':
 *             description: Server error
 */
router.post('/', async (req, res) => {
  await authController.loginUseCase(req, res);
});

module.exports = router;
