const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonutSchema =  new Schema ({
    donutname:{
        type: String
    },
    donuttype:{
        type: String
    }
});

const Donut = mongoose.model('donut', DonutSchema)

module.exports = Donut;