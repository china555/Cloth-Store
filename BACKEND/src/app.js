const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
dotenv.config();

const login = require('./routes/Authentication/login/index');

app.use(express.urlencoded({
    extended: false
}))

app.use(cors());

app.use(bodyParser.json())

app.use('/login', login);

app.listen(process.env.PORT, function () {
    console.log('Listening at Port ' + process.env.PORT);
})