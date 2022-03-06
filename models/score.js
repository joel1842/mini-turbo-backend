const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    sub: {
        type: String,
        required: true
    },
    coins: {
        type: Number, 
        required: true
    }
}, { timestamps: true })

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;