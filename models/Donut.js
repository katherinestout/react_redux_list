const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonutSchema =  new Schema ({
    name:{
        type: String,
        required: true
    }
})

module.exports = Donut = mongoose.model('donut', DonutSchema);