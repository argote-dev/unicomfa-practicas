module.exports = class AuthController {
  constructor(loginUseCase) {
    this.loginUseCase = loginUseCase;
    this.login = this.login.bind(this);
  }

  login(req, res) {
    const { email, password } = req.body;
    this.loginUseCase
      .execute({ email, password })
      .then((token) => {
        res.status(200).send({ token });
      })
      .catch((error) => {
        res.status(401).send({ message: error });
      });
  }
};
