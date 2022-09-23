const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

// Schema Planning
const userSchema = Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },

});

// Giving token to the Signed Up User
userSchema.methods.generateJWT = function () {
    const token = jwt.sign(
        {
            _id: this._id,
            email: this.email
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "3h"
        }
    );
    return token;
}

//Validating the User
const validateUser = user => {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
    });
    return schema.validate(user);
}

module.exports.User = model('User', userSchema);
module.exports.validate = validateUser;