const rotas = require("./router/rotas")
const express = require("express")
const app = express()

app.use(express.json())
app.use("/person", rotas)

app.listen(3000)