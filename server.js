//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//variables
const app = express();

const routes = require('./routes');

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cors
app.use(cors());

//routing
app.use('/', routes);

//bring in connectDB from config to connect to MongoDB
const connectDB = require('./config/db');
//connect to the db
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));