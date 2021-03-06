require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MONGODB_USER, MONGODB_PASSWORD} = require('../config');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

//middleware
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0-qzgrx.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to mongoDB instance');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connectiong to mongoDB', err)
});

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email is ${req.user.email}`);
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
