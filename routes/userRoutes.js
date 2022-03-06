const express = require("express")
const router = express.Router()
const User = require('../models/user')

router
    .post('/newuser', (req, res) => {
        const newuser = new User({
            name: req.body.name,
            sub: req.body.sub,
            bank: req.body.bank,
            wins: req.body.wins
        })

        newuser.save()
        .then((result) => {
            res.send(result)
            console.log('Added new user!')
        })
        .catch((err) => {
            console.log(err)
        })
    })

module.exports = router;