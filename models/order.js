const { Schema, model } = require('mongoose');

const orderSchema = Schema({
    userId: Schema.Types.ObjectId,
    ingredients: [
        { type: { type: String }, amount: Number } //here type is a keyword in the database itself
    ],
    customer: {
        deliveryAddress: String,
        phone: String,
        paymentType: String
    },
    price: Number,
    orderTime: {
        type: Date,
        default: Date.now
    }
});

module.exports.Order = model('Order', orderSchema);