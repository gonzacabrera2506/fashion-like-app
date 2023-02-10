const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();
// eslint-disable-next-line no-undef
const uri = process.env.MONGO_URI;

//SETTINGS
// eslint-disable-next-line no-undef
app.set('port', process.env.PORT || 3000);

//DB CONECTION
mongoose.connect(uri)
    .then(() => {
        console.log('DB is connected');
    })
    .catch( err => {
        console.log(err);
    });

//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

//ROUTES



//INIT SERVER
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});