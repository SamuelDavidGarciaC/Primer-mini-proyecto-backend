const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Hola humanos, tengan un buen día")
})

app.listen(port, () => {
    console.log("Mi puerto es "+ port)
})