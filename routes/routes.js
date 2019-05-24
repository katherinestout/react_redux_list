const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("hello world");
    if(err){
        return console.log(err, "there was an error!");
    }
});

module.exports = router;