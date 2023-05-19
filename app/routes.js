const express = require('express')
const router = express.Router()


// Add your routes here - above the module.exports line
router.use('/node_modules', express.static('node_modules'))



const v1Routes = require('./routes/v1');



router.use('/', v1Routes);


module.exports = router;
