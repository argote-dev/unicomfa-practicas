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
    `${__dirname}/components/user/adapters/routes/user.routes.js`,
    `${__dirname}/components/typeUser/adapters/routes/typeUser.routes.js`,
    `${__dirname}/components/auth/adapters/routes/auth.routes.js`,
    `${__dirname}/components/user/adapters/routes/user.routes.js`,
    `${__dirname}/components/processOnReturn/adapters/routes/processOnReturn.routes.js`,
    `${__dirname}/components/devolution/adapters/routes/devolution.routes.js`,
    `${__dirname}/components/userOnProcess/adapters/routes/userOnProcess.routes.js`,
    `${__dirname}/components/typeDocuments/adapters/routes/typeDocuments.routes.js`,
    `${__dirname}/components/documents/adapters/routes/documents.routes.js`,
    `${__dirname}/components/company/adapters/routes/company.routes.js`,
    `${__dirname}/components/program/adapters/routes/program.routes.js`,
    `${__dirname}/components/statusProcess/adapters/routes/statusProcess.routes.js`,
    `${__dirname}/components/typeProcess/adapters/routes/typeProcess.routes.js`,
    `${__dirname}/components/uploadFiles/adapters/routes/uploadFiles.routes.js`,
    `${__dirname}/components/typeDepartment/adapters/routes/typeDepartment.routes.js`,
    `${__dirname}/components/typeMunicipality/adapters/routes/typeMunicipality.routes.js`,
  ],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
