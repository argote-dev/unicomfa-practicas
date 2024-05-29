const app = require('./config/application');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const port = app.get('port');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/api/v1/users', require('./components/user/adapters/routes/user.routes'));
app.use('/api/v1/typeUser', require('./components/typeUser/adapters/routes/typeUser.routes'));
app.use('/api/v1/processOnReturn', require('./components/processOnReturn/adapters/routes/processOnReturn.routes'));
app.use('/api/v1/login', require('./components/auth/adapters/routes/auth.routes'));
app.use('/api/v1/devolution', require('./components/devolution/adapters/routes/devolution.routes'));
app.use('/api/v1/userOnProcess', require('./components/userOnProcess/adapters/routes/userOnProcess.routes'));
app.use('/api/v1/typeDocuments', require('./components/typeDocuments/adapters/routes/typeDocuments.routes'));
app.use('/api/v1/documents', require('./components/documents/adapters/routes/documents.routes'));
app.use('/api/v1/company', require('./components/company/adapters/routes/company.routes'));
app.use('/api/v1/program', require('./components/program/adapters/routes/program.routes'));
app.use('/api/v1/statusProcess', require('./components/statusProcess/adapters/routes/statusProcess.routes'));
app.use('/api/v1/typeProcess', require('./components/typeProcess/adapters/routes/typeProcess.routes'));
app.use('/api/v1/upload-pdf', require('./components/uploadFiles/adapters/routes/uploadFiles.routes'));
app.use('/api/v1/faculty', require('./components/faculty/adapters/routes/faculty.routes'));

app.on('error', (error) => {
  console.log(`❌ ${error}`);
});

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
