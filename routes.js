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

//delete donut
router.delete('/donuts/:id', (req, res) => {
    Donut.findByIdAndDelete({_id: req.params.id})
    .then(donut => res.send(donut))
    .catch(err => console.log(err) );
 });
    

/*edit donut
router.put('/donuts/edit/:id', function(req, res){
    Donut.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Donut.findOne({_id: req.params.id})
        .then((donut) => {
            res.send(donut);
        });
    });
});*/

//surprise donut
router.put('/donuts/surprise/:id', (req, res) => {
    Donut.findByIdAndUpdate({_id: req.params.id}, {"donutname": "Are donuts really just better bagels?"}).then(() => {
        Donut.findOne({_id: req.params.id})
        .then((donut) => {
            res.send(donut);
        });
    });
});

module.exports = router;