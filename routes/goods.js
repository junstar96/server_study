// Express.js의 라우터를 생성합니다.
import express from 'express' 
export const router = express.Router();

const goods = [
  {
    goodsId: 1,
    name: '상품 1',
    thumbnailUrl:
      'https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg',
    category: 'drink',
    price: 6.2,
  },
  {
    goodsId: 2,
    name: '상품 2',
    thumbnailUrl:
      'https://cdn.pixabay.com/photo/2014/08/26/19/19/wine-428316_1280.jpg',
    category: 'drink',
    price: 0.11,
  },
  {
    goodsId: 3,
    name: '상품 3',
    thumbnailUrl:
      'https://cdn.pixabay.com/photo/2016/09/07/02/12/frogs-1650658_1280.jpg',
    category: 'drink',
    price: 2.2,
  },
  {
    goodsId: 4,
    name: '상품 4',
    thumbnailUrl:
      'https://cdn.pixabay.com/photo/2016/09/07/02/11/frogs-1650657_1280.jpg',
    category: 'drink',
    price: 0.1,
  },
  
];


/** 상품 목록 조회 **/
// localhost:3000/api/goods GET
router.get('/goods', (req, res) => {
  return res.json({ goods: goods });
});


/** 상품 상세 조회 **/
// localhost:3000/api/goods/:goodsId GET
router.get('/goods/:goodsId', (req, res) => {
  //1. 상품의 id 조회
  //2. 상품 id와 일치하는 값 조회
  //3. 조회된 값을 반환한다.
    const goodsId = req.params.goodsId;
    const goodsItem = goods.find((item) => item.goodsId === Number(goodsId));
  
    return res.json({ goods: goodsItem });
  });


//가져올 데이터와 이름이 다르면 아예 인식이 안 된 채로 받아온다.
router.post('/goods', (req,res)=>{
  //1. name 2 url, 3, category, 4. price를 req.body에서 받는다.
  //해당 데이터를 바탕으로 상품을 등록한다.
  //등록된 데이터를 클라이언트에 반환한다.

  const {name,thumbnailUrl, category, price } = req.body;
  
  const goodsid = goods[goods.length-1].goodsId + 1;
  const new_goods = {
    goodsid : goodsid,
    name,
    thumbnailUrl,
    category,
    price
  }

  goods.push(new_goods);

  return res.json({goods : new_goods});

})







