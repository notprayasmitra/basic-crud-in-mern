const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://prayasmitra:krrish3575npm@basic-crud-in-mern.mokxiio.mongodb.net/crud")

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running!")
})