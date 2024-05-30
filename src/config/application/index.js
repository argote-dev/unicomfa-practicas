const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
app.set('port', process.env.PORT || 3000);

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:4200',
  'http://localhost:8080',
  'https://unicomfa-practicas.onrender.com/',
  'http://unicomfa-practicas.onrender.com/',
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key', 'Accept'],
    exposedHeaders: ['Content-Length', 'X-Kuma-Revision'],
    credentials: true,
    maxAge: 86400,
  }),
);

app.use(express.json());

module.exports = app;
