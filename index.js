const express = require("express")
const _ = require("lodash")
const morgan = require("morgan")
const mongoose = require('mongoose');
const authRoutes = require("./routes/authRoutes")

const uri = "mongodb+srv://alikemalcelik:9711565aA@mekont-muhendislik.lhsx6v6.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(process.env.PORT || 5000))
    .catch((err) => console.log(err))

const app = express()

app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(morgan("tiny"))

app.get("/", (req, res) => {
    res.render("index", {"title": "Anasayfa"})
})

app.use("/auth", authRoutes)

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