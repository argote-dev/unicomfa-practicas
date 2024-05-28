const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_JWT;

const verifyToken = (req, res, next) => {
  console.log(req.headers);
  const token = req.headers['x-api-key'];

  if (!token) {
    return res.status(403).send('Token not provided.');
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(500).send('Error authenticating token.');
    }

    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
