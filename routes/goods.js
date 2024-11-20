// Express.js의 라우터를 생성합니다.
import express from "express";
import Goods from "../schemas/goods.js";

const router = express.Router();

/** 상품 목록 조회 **/
// localhost:3000/api/goods GET
router.post("/goods", async (req, res) => {
  const { goodsId, name, thumbnailUrl, category, price } = req.body;

  //.exec는 동기를 비동기로 바꾸는 걸로 이해하자. promise를 반환한다.
  const goods_list = await Goods.find({ goodsId }).exec();
  if (goods_list.length) {
    return res
      .status(400)
      .json({ success: false, errorMassage: "이미 존재하는 데이터입니다." });
  }

  const createdGoods = await Goods.create({
    goodsId,
    name,
    thumbnailUrl,
    category,
    price,
  });

  return res.status(201).json({ goods: createdGoods });
});

/** 상품 상세 조회 **/
// localhost:3000/api/goods/:goodsId GET
router.get("/goods/:goodsId", (req, res) => {
  //1. 상품의 id 조회
  //2. 상품 id와 일치하는 값 조회
  //3. 조회된 값을 반환한다.
  const goodsId = req.params.goodsId;
  const goodsItem = goods.find((item) => item.goodsId === Number(goodsId));

  return res.json({ goods: goodsItem });
});

//가져올 데이터와 이름이 다르면 아예 인식이 안 된 채로 받아온다.
router.post("/goods", (req, res) => {
  //1. name 2 url, 3, category, 4. price를 req.body에서 받는다.
  //해당 데이터를 바탕으로 상품을 등록한다.
  //등록된 데이터를 클라이언트에 반환한다.

  const { name, thumbnailUrl, category, price } = req.body;

  const goodsid = goods[goods.length - 1].goodsId + 1;
  const new_goods = {
    goodsid: goodsid,
    name,
    thumbnailUrl,
    category,
    price,
  };

  goods.push(new_goods);

  return res.json({ goods: new_goods });
});

export default router;
