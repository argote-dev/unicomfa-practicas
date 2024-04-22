const express = require('express');
const router = express.Router();

const AuthRepository = require('../repository/auth.repository');
const LoginUseCase = require('../../usecase/login.usecase');
const AuthController = require('../controller/auth.controller');

const authRepository = new AuthRepository();
const loginUseCase = new LoginUseCase(authRepository);
const authController = new AuthController(loginUseCase);

router.post('/', async (req, res) => {
  await authController.loginUseCase(req, res);
});

module.exports = router;
