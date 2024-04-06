export const routers = (app: { get: (arg0: string, arg1: any) => void; use: (arg0: string, arg1: any) => void }) => {
  app.get('/', async (_req: any, res: { send: (arg0: string) => void }) => {
    res.send('Application [Practicas] Online');
  });
  app.use('/api/auth/', require('../../components/auth/infrastructure/controller'));
};
