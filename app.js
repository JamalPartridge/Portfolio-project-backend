const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to  App");
});

app.get("/not-found", (req, res) => {
    res.status(404).json({ error: "page does not exist" });
});

// EXPORT
module.exports = app;