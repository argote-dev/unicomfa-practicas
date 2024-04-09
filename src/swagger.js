const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    failOnErrors: true,
    openapi: '3.0.0',
    info: {
      title: 'API Prácticas',
      version: '1.0.0',
    },
    servers: [{ url: 'http://localhost:3000/api/' }, { url: 'https://unicomfa-practicas.onrender.com/api/' }],
    components: {
      schemas: {},
    },
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsDoc(options);

const swaggerDocs = (app) => {
  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
