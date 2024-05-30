const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
app.set('port', process.env.PORT || 3000);

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key'],
  }),
);
app.use(express.json());

module.exports = app;
