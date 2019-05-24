const express = require('express');
const router = express.Router();

//test
router.get('/', (req, res) => {
    res.send("hello world");
});

//get all
router.get('/api/all', (error, res) => {
  
    if(error){
        res.send("error getting all");
    } else {
        res.send("get all route");
    }
      
});

//add
router.post('/api/add', function(error, res){
    if(error){
        console.log("error adding!");
    } else{
        res.send("able to post");
    }
  
});

//delete
router.delete('/api/delete', function(error, res){
    if(error) {
        console.log("error deleting!");
    } else{
        res.send("able to delete");
    }


});

//update
router.put('/api/update', function(error, res){
    if(error){
        console.log("error updating!");
    } else {
        res.send("able to update");
    }

});

module.exports = router;