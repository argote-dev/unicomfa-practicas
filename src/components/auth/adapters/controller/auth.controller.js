module.exports = class AuthController {
  constructor(loginUseCase) {
    this.loginUseCase = loginUseCase;
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await this.loginUseCase.execute({ email, password });
      res.status(200).send({ result: result });
    } catch {
      res.status(500).send({ message: 'An error ocurred while auth the user.' });
    }
  }
};
