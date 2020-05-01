const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { SECRET_KEY } = require('../../config');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: 'You must be logged in.'});
  }

  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, SECRET_KEY, async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: 'You must be logged in.' });
    }

    const { userId } = payload;
    const user = await User.findById(userId);
    if (user) {
      req.user = user;
      next();
    } else {
      return res.status(400).send({ error: `User with id ${userId} not found in database` });
    }
  });
}