const express = require("express")
const fileUpload = require('express-fileupload');
const mongoose = require("mongoose")
const images = require("./models/images")
const app = express()

app.use(fileUpload());
app.use(express.static('public'));
app.use('/', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next();
});

mongoose.connect("mongodb://localhost:27017/Stock",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


app.get("/images", (req, res, next) => {
    images.find().then((result) => {
        res.json(result)
    })
})

app.post("/upload", (req, res) => {
    const { image } = req.files;

    if (!image) return res.sendStatus(400)

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    image.forEach(element => {
        element.mv(__dirname + "/public/images/" + element.name)
        const img = new images({
            file_name: element.name,
            owner: "Nicolas",
            file_size: element.size,
            file_path: "/images/" + element.name,
            file_mime: element.mimetype,
            file_date: today
        })

        img.save()
    });

    res.redirect("http://localhost:3000")
})

module.exports = app;