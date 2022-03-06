const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sub: {
        type: String,
        required: true,
    },
    bank: {
        type: Number, 
        required: true
    },
    wins: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema);

module.exports = User;