//dependencies
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

//variables
const app = express();
const routes = require('./routes/routes');

//routing
app.use('/api/donuts', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));