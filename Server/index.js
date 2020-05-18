const express = require('express');
const app = express();
const axios = require('axios');

const { api_key } = require('./config/config')

app.get('/',  async (req, res) => {
    const { data } = await axios.get(`https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-name/20204095?api_key=${api_key}`)
    console.log(data)
    res.send('hello')
})

app.listen(5000, () => console.log('Listening at port 5000'))