const express = require('express');
const router = express.Router();

const verNum = 2;

// Add your routes here - above the module.exports line

router.use('/node_modules', express.static('node_modules'))



router.post(`/v${verNum}/question_3-branch`, function (req, res) {
    const checkGias = req.session.data['question_2-gias'];

    if (checkGias === 'No') {
        res.redirect(`/v${verNum}/question_3`);
    } else {
        res.redirect(`/v${verNum}/approved`);
    }



});




// no code below here

module.exports = router
