const rotas = require("./router/rotas")
const express = require("express")
const app = express()

app.use("/person", rotas)