const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const summonerRoute = require("./api/index");
const rankingRoute = require("./api/ranking");

app.use(bodyParser.urlencoded({ extended: false })); // application/x-www-form-urlencoded
app.use(bodyParser.json()); // application/json

app.use("/summoner", summonerRoute);
app.use("/ranking", rankingRoute);

app.listen(5000, () => console.log("Listening at port 5000"));
