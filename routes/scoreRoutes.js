const express = require("express")
const router = express.Router()
const Score = require('../models/score')

router
    .post('/addscore', (req, res) => {

        let addWin = 0
        if (req.body.win === true) {
            addWin = 1
        }

        console.log("win?", req.body.win, addWin)

        Score.findOneAndUpdate({
            sub: req.body.sub
        }, {
            coins: req.body.coins,
            $inc: {wins: addWin}
        })
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.log(err)
        })
    })

    .post('/getscore/:sub/', (req, res) => {

        Score.find({sub: req.params.sub})
        .then((result) => {
            if (result.length === 0) {
                console.log("No results")
                const newscore = new Score({
                    sub: req.params.sub,
                    coins: 1000,
                    wins: 0
                })
                newscore.save()
                .then((result) => {
                    res.send(result)
                    console.log('Added new score!')
                })
                .catch((err) => {
                    console.log(err)
                })
            } else {
                console.log(result)
                res.send(result)
            }
        }).catch((err) => {
            console.log(err)
        })
    })

    .get('/leaderboard/', (req, res) => {

        Score.find().sort({wins: -1})
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
    })

module.exports = router;