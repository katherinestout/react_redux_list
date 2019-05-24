//dependencies
const express = require('express');
const bodyParser = require('body-parser');

//variables
const app = express();
const routes = require('./routes/routes');

//routing
app.use('/api', routes);

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//bring in connectDB from config to connect to MongoDB
const connectDB = require('./config/db');
//connect to the db
connectDB();



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));