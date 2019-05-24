const express = require('express');
const router = express.Router();

const Donut = require('./models/Donut');


//test
router.get('/donuts', (req, res) => {
    res.send("hello world");
});

//get all donuts
router.get('/donuts/all', (req, res) => {
    Donut.find()
    .then(donuts => res.json(donuts))
    .catch(err => res.status(404).json({nodonutsfound: 'no donuts found'})); 
});

//add donut
router.post('/donuts/post', (req, res) => {
    Donut.create(req.body)
    .then(donut => res.send(donut))
    .catch(err => res.status(404).json({postrejected: "something went wrong posting"}) 
     );
});
//add?name=jelly 

//delete
router.delete('/donuts/:id', (req, res) => {
 Donut.findByIdAndRemove({_id: req.params.id})
 .then(donut => res.send(donut));
 });
    

//update
router.put('/donuts/:id', function(req, res){
 
        res.send("able to update");

});

module.exports = router;