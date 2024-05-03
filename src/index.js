const app = require('./config/application');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const port = app.get('port');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/api/v1/users', require('./components/user/adapters/routes/user.routes'));
app.use('/api/v1/processOnReturn', require('./components/processOnReturn/adapters/routes/processOnReturn.routes'));
app.use('/api/v1/login', require('./components/auth/adapters/routes/auth.routes'));
app.use('/api/v1/devolution', require('./components/devolution/adapters/routes/devolution.routes'));
app.use('/api/v1/company', require('./components/company/adapters/routes/company.routes'));

app.on('error', (error) => {
  console.log(`❌ ${error}`);
});

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
