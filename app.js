const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT
const user = process.env.MONGO_USER
const pass = process.env.MONGO_PASS
const mongoose = require('mongoose')
const uri = `mongodb+srv://${user}:${pass}@mini-turbo-database.fszjr.mongodb.net/mini-turbo-database?retryWrites=true&w=majority`;
const Score = require('./models/score')

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("Connected to db!")
        app.listen(port, () => {
            console.log(`Listening on port ${port} 🚀`)
        })
    })
    .catch((err) => {
        console.log(err)
    })

app.get('/addscore', (req, res) => {
    const newscore = new Score({
        name: 'Joel',
        coins: 2000,
        wins: 5
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



