const express = require('express');
const router = express.Router();
//const mongoose = require('mongoose');
//const passport = require('passport');

const Donut = require('../models/Donut');

//test
router.get('/donuts', (req, res) => {
    res.send("hello world");
});

//get all
router.get('/donuts/all', (req, res) => {
    Donut.find()
    .then(donuts => res.json(donuts))
    .catch(err => res.status(404).json({nodonutsfound: 'no donuts found'})); 
});

//add
router.post('/donuts/post', function(req, res){
        console.log(req.body);

});
//add?name=jelly 


module.exports = router;