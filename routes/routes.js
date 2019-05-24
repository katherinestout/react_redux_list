const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Donut = require('./../models/Donut');

//test
router.get('/', (req, res) => {
    res.send("hello world");
});

//get all
router.get('/all', (req, res) => {
    Donut.find()
    .then(donuts => res.json(donuts))
    .catch(err => res.status(404).json({nodonutsfound: 'no donuts found'})); 
});

//add
router.post('/add', function(req, res){
 const newDonut = new Donut({
     name: req.body.name
 });
 newDonut.save().then(donut => res.json(donut));
});
//add?name=jelly

//delete
router.delete('/delete', function(req, res){
 Donut.findById(req.params.id).then(donut => {
     donut.remove().then(() => res.json({success: true}));
 })
 .catch(err => res.status(404).json({donutnotfound: 'no donut found'}));
    
});

//update
router.put('/update', function(req, res){
 
        res.send("able to update");

});

module.exports = router;