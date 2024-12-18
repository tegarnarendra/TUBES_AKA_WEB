// const backend = require("./back-end/backend.js");
const express = require("express");
const path = require("path");
const app = express();
const port = "3000";

app.use("/api", express.json());
app.use("/src", express.static(path.join(__dirname, "src")));
app.use("/", express.static(path.join(__dirname, "front-end")));

// app.post("/api/cariPlayer", backend.cariPlayer);

app.listen(port);
