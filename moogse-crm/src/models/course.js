const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    _id: {
        required: true,
        type: String,
        upperCase: true,
        alias: 'code'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    updatedAt: {
        type: Date,
        select: false
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        }
    ]
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

const model = mongoose.model('Course', schema)
module.exports = model;