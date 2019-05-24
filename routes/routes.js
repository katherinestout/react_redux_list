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

        res.send("get all route");

      
});

//add
router.post('/add', function(req, res){
 
        res.send("able to post");
  
});

//delete
router.delete('/delete', function(req, res){
        res.send("able to delete");
});

//update
router.put('/update', function(req, res){
 
        res.send("able to update");

});

module.exports = router;