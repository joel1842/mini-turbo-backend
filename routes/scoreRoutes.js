const express = require("express")
const router = express.Router()
const Score = require('../models/score')

router
    .post('/addscore', (req, res) => {
    console.log(req.body.player)

    const newscore = new Score({
        sub: req.body.player,
        coins: req.body.coins
    })

    newscore.save()
        .then((result) => {
            res.send(result)
            console.log('Added new score!')
        })
        .catch((err) => {
            console.log(err)
        })
    })

    .get('/getscore/:sub/', (req, res) => {
        console.log("fired")
        Score.find({sub: req.params.sub})
        .then((result) => {
            console.log(result)
            res.send(result)
        })
    })

module.exports = router;