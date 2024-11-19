import express from 'express';
import connect from './schemas/index.js'
import route_1 from './routes/route_1.js'

const app = express();
const PORT = 3000;

connect();

// Express에서 req.body에 접근하여 body 데이터를 사용할 수 있도록 설정합니다.
app.use(express.json());//미들웨어 1
app.use(express.urlencoded({ extended: true })); //미들웨어 2
//static : 별다른 가공을 거치지 않은 그대로의 파일.
//./asset이라고 했다면 그 폴더 내의 모든 파일을 순수하게 가져오겠다는 의미.
app.use(express.static('./asset')); //미들웨어 3




//미들웨어 4
app.use((req,res,next)=>{
  console.log("RequestURL : ", req.originalUrl, '-', new Date());
  next();
})

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hi!' });
});

//미들웨어 5
app.use('/api', [router,route_1]);

app.use('/log', (req,res,next)=>{
  res.json({fin: "check"})
})

//next를 사용하지 않아 다음 미들웨어로 넘어가지 않음.
app.use('/log', (req,res,next)=>{
  console.log(res);
})

// app.get('/log', (req,res,next)=>{
//   console.log("입력 확인");
//   res.json({hello : "확인용"})
//   next();
// }, (req, res, next)=>{
//   console.log("입력 확인 2");
//   return res.json({});
// })

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});