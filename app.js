const cors = require("cors");
const express = require("express");

const agentController = require('./controllers/agentController')

const app = express();

app.use(cors());
app.use(express.json());

app.use("/agents", agentController);

app.get("/", (req, res) => {
    res.send("Welcome to Valorant Generator 2.0");
});

app.get("/not-found", (req, res) => {
    res.status(404).json({ error: "page does not exist" });
});

// EXPORT
module.exports = app;