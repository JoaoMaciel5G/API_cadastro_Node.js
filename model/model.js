const mongoose = require("mongoose")
const dotenv = require("dotenv")

const name = process.env.DB_USER
const passwd = process.env.DB_PASSWORD
mongoose.connect(`mongodb+srv://${name}:${passwd}@apinode.owxm2nc.mongodb.net/?retryWrites=true&w=majority`)

const person = mongoose.model("people", {
    name: String,
    age: Number,
    email: String,
    senha: String,
    approved: Boolean
})