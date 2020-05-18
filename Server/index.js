const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const summonerRoute = require('./api/index');

app.use(bodyParser.urlencoded({ extended: false })); // application/x-www-form-urlencoded
app.use(bodyParser.json()); // application/json

app.use('/summoner', summonerRoute);

app.listen(5000, () => console.log('Listening at port 5000'))