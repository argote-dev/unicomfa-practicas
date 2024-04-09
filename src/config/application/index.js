const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const userRoutes = require('../../components/user/infrastructure/routes/user.routes');

const app = express();

dotenv.config();
app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.json());

app.use('api/v1/users', userRoutes);

module.exports = app;
