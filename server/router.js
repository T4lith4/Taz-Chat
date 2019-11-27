//Set up express router that will display "Server Running" on our deployed back-end
const express = require('express');
const router = express.Router();

router.get('/', (req,res)=> {
    res.send('Server running');
});

module.exports = router;