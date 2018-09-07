const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors')

// Import Router
const AuthenticationRouter = require('./routers/Authentication.js');
const RideRouter = require('./routers/Ride');


const app = express();
const prefixRouting = '/api';


dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routing
app.use(`${prefixRouting}/auth`, AuthenticationRouter);
app.use(`${prefixRouting}/ride`, RideRouter);

app.listen(3000);