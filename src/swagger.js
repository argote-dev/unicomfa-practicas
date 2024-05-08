const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Practicas API',
    version: '1.0.0',
    description: 'Proyecto universitario',
  },
  servers: [
    {
      url: 'http://localhost:3000/',
      description: 'Servidor de dev',
    },
    {
      url: 'https://unicomfa-practicas.onrender.com/',
      description: 'Servidor de prod',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: [
    `${__dirname}/components/auth/adapters/routes/auth.routes.js`,
    `${__dirname}/components/user/adapters/routes/user.routes.js`,
    `${__dirname}/components/processOnReturn/adapters/routes/processOnReturn.routes.js`,
    `${__dirname}/components/devolution/adapters/routes/devolution.routes.js`,
    `${__dirname}/components/typeDocuments/adapters/routes/typeDocuments.routes.js`,

  ],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
