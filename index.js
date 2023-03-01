const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const cards = require("./cards");
app.get("/cards", function (req,res) {
    res.json({success : true,cards :cards});
})


app.listen(5000, function () {
    console.log("Server running on port 5000");
})