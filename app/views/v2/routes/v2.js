const express = require('express');
const router = express.Router();

const verNum = 2;

// Add your routes here - above the module.exports line

router.use('/node_modules', express.static('node_modules'))



router.post(`/v${verNum}/question_1-branch`, function (req, res) {
    const checkGias = req.session.data['question_1-gias'];

    if (checkGias === 'No') {
        res.redirect(`/v${verNum}/question_2`);
    } else {
        res.redirect(`/v${verNum}/approved`);
    } else {
        res.redirect(`/v${verNum}/approved`);
    }




});


router.post(`/v${verNum}/question_4-branch`, function (req, res) {
    const checkGias = req.session.data['question_4-gias'];

    if (checkGias === 'No') {
        res.redirect(`/v${verNum}/bluecoat-primary-agreememt-rejected`);
    } else {
        res.redirect(`/v${verNum}/bluecoat-primary-agreememt-waiting`);
    }



});


// no code below here

module.exports = router
