require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

///////////////// Login /////////////////////
var loginRouter = require('./routes/Login');
app.use('/login', loginRouter);

///////////////// Contractor /////////////////////
var conRouter = require('./routes/Conference');
app.use('/con', conRouter);


app.listen(port, () => {
    console.log('Server started on: ' + port);
});