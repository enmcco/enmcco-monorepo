import app from './main';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const server = app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
})

export default server;