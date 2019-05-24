//dependencies
const express = require('express');
const bodyParser = require('body-parser');

//bring in connectDB from config to connect to MongoDB
const connectDB = require('./config/db');


//variables
const app = express();
const routes = require('./routes/routes');

//connect to the db
connectDB();

//routing
app.use('/api/donuts', routes);

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));