const express = require("express")
const fileUpload = require('express-fileupload');

const app = express()

app.use(fileUpload());
app.use(express.static('public'));


app.get("/images" , (req, res) => {
    res.json(
        {data : [
            {
                owner : "Nicolas",
                file_name : "zAls.jpeg",
                file_mime : "jpeg/html",
                file_size : 67430,
                file_path : "/image/Nicolas/zAls.jpeg"
            }
        ]}
    )
})

app.post("/add/images" , (req, res) => {
    console.log(req.files.image)
    res.send(200)
})

module.exports = app;