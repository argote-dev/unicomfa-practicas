const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.json());

module.exports = app;
