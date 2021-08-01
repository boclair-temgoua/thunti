const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const accessToken = jwt.verify(token, process.env.JWT_KEY);
    const { userId } = accessToken;
    req.authUser = accessToken;
    if (
      req.authUser
            && req.authUser.userId === userId
    ) {
      next();
    } else {
      res.status(401).send({ message: 'Token is not valid for this user' });
    }
  } catch (e) {
    res.status(401).json({
      message: 'Invalid or expired token provider!',
      error: e,
    });
  }
};

module.exports = { authMiddleware };
