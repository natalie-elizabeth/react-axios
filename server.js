const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 4000;
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./DB');

mongoose.connect(config.DB).then(
    () => { console.log('Database is connected') },
    err => {
        console.log('Can not connect to the database' + err)
    });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function () {
    console.log('Server is running on Port: ', PORT);
});