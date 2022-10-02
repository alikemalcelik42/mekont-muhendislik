const express = require("express")
const _ = require("lodash")

const app = express()

app.listen(process.env.PORT || 5000, () => {
    console.log("App runned.")
})

app.get("/", (req, res) => {
    res.send("Hello")
})