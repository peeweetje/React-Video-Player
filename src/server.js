const express = require('express');
var cors = require('cors')
const data = require('./data.json');

const app = express();

app.use(cors())

app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(3001, () => {
  console.log('API listening on port 3001...');
});