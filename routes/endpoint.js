import express from 'express';

export const router_app = express.Router();

router_app.get('/app', (req,res) => {
    res.json('default url for goods.js GET Method');
});

router_app.get('/app/about', (req,res) => {
    res.json('default url for goods.js GET Method');
});

