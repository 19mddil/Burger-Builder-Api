const express = require('express');
const { Order } = require('../models/order');
const router = express('router');
const authorize = require('../middlewares/authorize')

const newOrder = async (req, res) => {
    const order = new Order(req.body);
    try {
        if (req.body.userId == req.user._id) {
            await order.save();
            return res.status(201).send("Order placed successfully");
        }
        else {
            return res.status(400).send("Sorry! you are placing another mans order");
        }
    } catch (err) {
        return res.status(400).send("Sorry! odder couldn't be placed");
    }
}

const orderList = async (req, res) => {
    const orders = await Order.find({ userId: req.user._id }).sort({ orderTime: -1 });
    res.send(orders);
}

router.route('/')
    .get(authorize, orderList)
    .post(authorize, newOrder);

module.exports = router;