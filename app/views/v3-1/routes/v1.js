const express = require('express');
const router = express.Router();

const verNum = 1;

// Add your routes here - above the module.exports line

router.use('/node_modules', express.static('node_modules'))



router.post(`/v1/question_1-branch`, function (req, res) {
    const checkGias = req.session.data['question_1-gias'];

    if (checkGias === 'No') {
        res.redirect(`/v1/question_2`);
    } else {
        res.redirect(`/v1/approved`);
    }



});

router.post(`/v2/question_1-branch`, function (req, res) {
    const checkGias = req.session.data['question_1-gias'];

    if (checkGias === 'Yes') {
        res.redirect(`/v2/approved`);
      } else if (checkGias === 'No'){
            res.redirect(`/v2/approved`);
          } else if (checkGias === 'maybe'){
                res.redirect(`/v2/bluecoat-primary-agreememt-waiting`);
    } else {
        res.redirect(`/v2/bluecoat-primary-agreememt-rejected`);
    }



});

router.post(`/v2/question_5-branch`, function (req, res) {
    const checkGias = req.session.data['question_1-gias'];

    if (checkGias === 'Yes') {
        res.redirect(`/v2/approved`);
      } else if (checkGias === 'No'){
            res.redirect(`/v2/bluecoat-primary-agreememt-rejected`);
    } else {
        res.redirect(`/v2/bluecoat-primary-agreememt-waiting`);
    }



});

router.post(`/v1/question_4-branch`, function (req, res) {
    const checkGias = req.session.data['question_4-gias'];

    if (checkGias === 'No') {
        res.redirect(`/v1/bluecoat-primary-agreememt-rejected`);
    } else {
        res.redirect(`/v1/bluecoat-primary-agreememt-waiting`);
    }



});

router.post(`/v2/question_4-branch`, function (req, res) {
    const checkGias = req.session.data['question_4-gias'];

    if (checkGias === 'No') {
        res.redirect(`/v2/bluecoat-primary-agreememt-rejected`);
    } else {
        res.redirect(`/v2/bluecoat-primary-agreememt-waiting`);
    }



});


// no code below here

module.exports = router
