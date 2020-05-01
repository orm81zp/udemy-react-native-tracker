const express = require('express');
const mongoose = require('mongoose');
const { MONGODB_USER, MONGODB_PASSWORD} = require('../config');

const app = express();

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

app.get('/', (req, res) => {
  res.send('Hi there');
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
