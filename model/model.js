const mongoose = require("mongoose")
require("dotenv").config()

const name = process.env.DB_USER
const passwd = process.env.DB_PASSWORD
mongoose.connect(`mongodb+srv://${name}:${passwd}@apinode.owxm2nc.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=>{
        console.log("Conectou")
    })
    .catch((err)=>{
        console.log(err)
        return
    })

const person = mongoose.model("people", {
    name: String,
    age: Number,
    email: String,
    senha: String,
    approved: Boolean
})

module.exports = person;