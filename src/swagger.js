const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Practicas API',
    version: '1.0.0',
    description: 'Proyecto universitario',
  },
};

const options = {
  swaggerDefinition,
  apis: [`${__dirname}/components/user/infrastructure/routes/user.routes.js`],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
