import express from 'express';
import {hello} from './endpoint.js';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});



// app.listen(PORT, () => {
//   console.log(PORT, '포트로 서버가 열렸어요!');
// });


hello();