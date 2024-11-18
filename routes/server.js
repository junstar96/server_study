import express from 'express';
import {router_app} from './endpoint.js';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(router_app);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});

