const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT
const user = process.env.MONGO_USER
const pass = process.env.MONGO_PASS
const mongoose = require('mongoose')
const uri = `mongodb+srv://${user}:${pass}@mini-turbo-database.fszjr.mongodb.net/mini-turbo-database?retryWrites=true&w=majority`;
const scoreRoutes = require('./routes/scoreRoutes')

app.use(express.json())
app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*")
    res.set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, X-Custom-Header, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization")
    res.set("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
    res.set("Access-Control-Allow-Credentials", "true")
    next()
})

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

app.use('/score', scoreRoutes)



