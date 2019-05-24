const express = require('express');
const router = express.Router();

const Donut = require('./models/Donut');


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
        Donut.create(req.body).then(donuts => console.log(donuts));
});
//add?name=jelly 

//delete
router.delete('/donuts/:id', function(req, res){
 Donut.findById(req.params.id).then(donut => {
     donut.remove().then(() => res.json({success: true}));
 })
 .catch(err => res.status(404).json({donutnotfound: 'no donut found'}));
    
});

//update
router.put('/donuts/:id', function(req, res){
 
        res.send("able to update");

});

module.exports = router;