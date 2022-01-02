const mongoose = require('mongoose');
const Joi = require('joi');

// validator: joi, express-validator, validator
const schema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        minLength: 2,
        maxLength: 10,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        minLength: 2,
        maxLength: 10,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (email) => {
                // const validation = Joi.string().email().validate(email);
                // const {error} = validation;

                // if(error){
                //     return false;
                // }
                // return true
                return !Joi.string().email().validate(email).error;
            },
            msg: 'invalid email format'
        }
    },
    courses: [{
        type: String,
        ref: 'Course'
    }]

},
    {
        timestamp: true,
        toJSON: {
            virtuals: true
        }
    })

// schema.virtual('code').get(function () {
//     return this._id
// })

const model = mongoose.model('Student', schema)
module.exports = model;