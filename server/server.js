const express  = require("express");
// import express from express;
const cors  = require("cors");

const app = express();

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send("hello world");
});

app.listen(4000, () => console.log('Server Started'))