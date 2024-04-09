const app = require('./config/application');
const swaggerDocs = require('./swagger');

const port = app.get('port');

app.on('error', (error) => {
  console.log(`❌ ${error}`);
});

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
  swaggerDocs(app);
});
