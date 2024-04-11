const app = require('./config/application');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const port = app.get('port');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/api/v1/users', require('./components/user/infrastructure/routes/user.routes'));

app.on('error', (error) => {
  console.log(`❌ ${error}`);
});

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
