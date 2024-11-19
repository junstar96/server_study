import express from 'express';
import {router_app} from './routes/endpoint.js';
import router from './routes/goods.js';
import connect  from "./schemas/index.js";




const app = express();
const PORT = 3000;

connect();

//mongodb+srv://<db_username>:<db_password>@server-item-test.stkak.mongodb.net/?retryWrites=true&w=majority&appName=server-item-test
//mongodb+srv://jemuras1010:gowjfhdnjf12!@closter0.ofp3n.mongodb.net/?retryWrites=true&w=majority&appName=closter0

app.use(express.json());
app.use(express.urlencoded({'extended' : true}));

app.get('/', (req, res) => {
  const req_query = req.query;
  res.send('Hello World!');
});

app.get('/:name', (req, res) => {
  const {name} = req.params;
  res.send(name);
});

app.post('/', (req, res)=>
{
  const reqbody = req.body();
  return res(201).json({key : 'value'})
});


app.use('/' ,[router_app]);
app.use('/goods', [router]);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});

