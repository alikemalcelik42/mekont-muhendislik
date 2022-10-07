const express = require("express")
const _ = require("lodash")
const morgan = require("morgan")
const mongoose = require('mongoose');

const uri = "mongodb+srv://alikemalcelik:9711565aA@mekont-muhendislik.lhsx6v6.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("Connection succesfull."))
    .catch((err) => console.log(err))

const app = express()
app.use(express.static("public"))
app.set("view engine", "ejs")

app.use(morgan("tiny"))

app.listen(process.env.PORT || 5000)

app.get("/", (req, res) => {
    res.render("index", {"title": "Anasayfa"})
})

app.get("/about", (req, res) => {
    res.render("about", {"title": "Hakkımızda"})
})

app.get("/about-us", (req, res) => {
    res.redirect("/about")
})

app.use((req, res) => {
    res.status(404)
    res.render("404", {"title": "404"})
})