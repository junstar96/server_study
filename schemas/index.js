// /schemas/index.js
import express from 'express'
import mongoose from 'mongoose';
import Goods from './goods.js'

const router = express.Router();

router.post('/goods', async (req,res)=>{
    const {goodsId, name, thumbnailUrl,category,price} = req.body;

    //배열의 형태로 반환된다.
    const goods = await Goods.find({goodsId : goodsId}).exec();

    if(goods.length)
    {
        return res.status(400).json({errormassage : "이미 존재함"})
    }

    const createdGoods = await Goods.create(
        {
            goodsId : goodsId,
            name : name,
            thumbnailUrl : thumbnailUrl,
            category : category,
            price : price
        }
    )

    return res.status(201).json({goods : createdGoods});
})

export default router;