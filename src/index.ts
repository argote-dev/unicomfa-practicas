import { app } from './config/application';
const port = app.get('port');

app.on('error', (error: any) => {
  console.log(`❌ ${error}`);
});

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
