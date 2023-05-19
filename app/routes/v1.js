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
        const checkSource = req.session.data['question_1-source'];

        if (checkSource === 'Yes') {
            res.redirect(`accommodation-for-affected-pigs`);

        } else {
            res.redirect(`company-sources-affected-pigs-came-from`);
        }




});

router.post(`/v3/question_1-branch`, function (req, res) {
    const checkSource = req.session.data['question_1-source'];

    if (checkSource === 'Yes') {
        res.redirect(`feed-for-affected-pigs`);

    } else {
        res.redirect(`company-sources-affected-pigs-came-from`);
    }



});

router.post(`/v3-1/question_1-branch`, function (req, res) {
    const checkSource = req.session.data['question_1-source'];

    if (checkSource === 'Yes') {
        res.redirect(`feed-for-affected-pigs`);

    } else {
        res.redirect(`company-sources-affected-pigs-came-from`);
    }



});


router.post(`/v2/question_2-branch`, function (req, res) {
    const checkSyndrome = req.session.data['question_2-syndrome'];

    if (checkSyndrome === 'Blood') {
        res.redirect(`blood`);
      } else if (checkSyndrome === 'Enteric'){
            res.redirect(`enteric`);
          } else if (checkSyndrome === 'Musculoskeletal'){
                res.redirect(`musculoskeletal`);
              } else if (checkSyndrome === 'Nervous'){
                    res.redirect(`nervous`);
                  } else if (checkSyndrome === 'Reproductive'){
                        res.redirect(`reproductive`);
                      } else if (checkSyndrome === 'Nervous'){
                            res.redirect(`nervous`);
                          } else if (checkSyndrome === 'Reproductive'){
                                res.redirect(`reproductive`);
                              } else if (checkSyndrome === 'Respiratory'){
                                    res.redirect(`respiratory`);
                                  } else if (checkSyndrome === 'Skin'){
                                        res.redirect(`skin`);
                                      } else if (checkSyndrome === 'Systemic'){
                                            res.redirect(`systemic`);
                                          } else if (checkSyndrome === 'Urinary'){
                                                res.redirect(`urinary`);
    } else {
        res.redirect(`/v2/bluecoat-primary-agreememt-rejected`);
    }



});

router.post(`/v3/question_2-branch`, function (req, res) {
    const checkSyndrome = req.session.data['question_2-syndrome'];

    if (checkSyndrome === 'Blood') {
        res.redirect(`blood`);
      } else if (checkSyndrome === 'Enteric'){
            res.redirect(`enteric`);
          } else if (checkSyndrome === 'Musculoskeletal'){
                res.redirect(`musculoskeletal`);
              } else if (checkSyndrome === 'Nervous'){
                    res.redirect(`nervous`);
                  } else if (checkSyndrome === 'Reproductive'){
                        res.redirect(`reproductive`);
                      } else if (checkSyndrome === 'Nervous'){
                            res.redirect(`nervous`);
                          } else if (checkSyndrome === 'Reproductive'){
                                res.redirect(`reproductive`);
                              } else if (checkSyndrome === 'Respiratory'){
                                    res.redirect(`respiratory`);
                                  } else if (checkSyndrome === 'Skin'){
                                        res.redirect(`skin`);
                                      } else if (checkSyndrome === 'Systemic'){
                                            res.redirect(`systemic`);
                                          } else if (checkSyndrome === 'Urinary'){
                                                res.redirect(`urinary`);
    } else {
        res.redirect(`/v2/bluecoat-primary-agreememt-rejected`);
    }



});


router.post(`/v3-1/question_2-branch`, function (req, res) {
    const checkSyndrome = req.session.data['question_2-syndrome'];

    if (checkSyndrome === 'Blood') {
        res.redirect(`blood`);
      } else if (checkSyndrome === 'Enteric'){
            res.redirect(`enteric`);
          } else if (checkSyndrome === 'Musculoskeletal'){
                res.redirect(`musculoskeletal`);
              } else if (checkSyndrome === 'Nervous'){
                    res.redirect(`nervous`);
                  } else if (checkSyndrome === 'Reproductive'){
                        res.redirect(`reproductive`);
                      } else if (checkSyndrome === 'Nervous'){
                            res.redirect(`nervous`);
                          } else if (checkSyndrome === 'Reproductive'){
                                res.redirect(`reproductive`);
                              } else if (checkSyndrome === 'Respiratory'){
                                    res.redirect(`respiratory`);
                                  } else if (checkSyndrome === 'Skin'){
                                        res.redirect(`skin`);
                                      } else if (checkSyndrome === 'Systemic'){
                                            res.redirect(`systemic`);
                                          } else if (checkSyndrome === 'Urinary'){
                                                res.redirect(`urinary`);
    } else {
        res.redirect(`/v2/bluecoat-primary-agreememt-rejected`);
    }



});



router.post(`/v3/question_3-branch`, function (req, res) {
    const checkSource = req.session.data['question_3-what'];

    if (checkSource === 'Yes') {
        res.redirect(`select-practice`);

    } else {
        res.redirect(`report-to-view`);
    }



});


router.post(`/v3-1/question_3-branch`, function (req, res) {
    const checkSource = req.session.data['question_3-what'];

    if (checkSource === 'Yes') {
        res.redirect(`select-practice`);

    } else {
        res.redirect(`report-to-view`);
    }



});


router.post(`/draft/question_draft-branch`, function (req, res) {
    const checkSource = req.session.data['question_draft-what'];

    if (checkSource === 'Yes') {
        res.redirect(`submit-from-draft`);

    } else {
        res.redirect(`report-to-view`);
    }



});



router.post(`/v3/question_4-branch`, function (req, res) {
    const checkSource = req.session.data['question_4-report'];

    if (checkSource === 'Yes') {
        res.redirect(`select-practice-2`);

      } else if (checkSource=== 'No'){
            res.redirect(`select-practice-3`);

          } else if (checkSource=== 'No1'){
                res.redirect(`type-of-national-report`);

    }



});


router.post(`/v3-1/question_4-branch`, function (req, res) {
    const checkSource = req.session.data['question_4-report'];

    if (checkSource === 'Yes') {
        res.redirect(`select-practice-2`);

      } else if (checkSource=== 'No'){
            res.redirect(`select-practice-3`);

          } else if (checkSource=== 'No1'){
                res.redirect(`type-of-national-report`);

    }



});


router.post(`/v3/question_5-branch`, function (req, res) {
    const checkSource = req.session.data['question_5-national'];

    if (checkSource === 'Yes') {
        res.redirect(`#`);

    } else {
        res.redirect(`#`);
    }



});


router.post(`/v3-1/question_5-branch`, function (req, res) {
    const checkSource = req.session.data['question_5-national'];

    if (checkSource === 'Yes') {
        res.redirect(`#`);

    } else {
        res.redirect(`#`);
    }



});



router.post(`/v3/question_6-branch`, function (req, res) {
    const checkSource = req.session.data['question_6-premises'];

    if (checkSource === 'Yes') {
  res.redirect(`single-report`);
    } else {
        res.redirect(`single-report`);
    }



});



router.post(`/v3-1/question_6-branch`, function (req, res) {
    const checkSource = req.session.data['question_6-premises'];

    if (checkSource === 'Yes') {
  res.redirect(`multiple-report`);
    } else {
        res.redirect(`multiple-report`);
    }



});

router.post(`/v3/question_62-branch`, function (req, res) {
    const checkSource = req.session.data['question_62-premises'];

    if (checkSource === 'Yes') {
  res.redirect(`multiple-report`);
    } else {
        res.redirect(`multiple-report`);
    }



});


router.post(`/v3-1/question_62-branch`, function (req, res) {
    const checkSource = req.session.data['question_62-premises'];

    if (checkSource === 'Yes') {
  res.redirect(`multiple-report`);
    } else {
        res.redirect(`multiple-report`);
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


router.post(`/v3/question_7-branch`, function (req, res) {
    const checkSource = req.session.data['question_7-report'];

    if (checkSource === 'Yes') {
  res.redirect(`national-report-all`);
    } else {
        res.redirect(`respiratory-report`);
    }



});

router.post(`/v3-1/question_7-branch`, function (req, res) {
    const checkSource = req.session.data['question_7-report'];

    if (checkSource === 'Yes') {
  res.redirect(`national-report-all`);
    } else {
        res.redirect(`respiratory-report`);
    }



});

router.post(`/v3-1/question_9-branch`, function (req, res) {
    const checkSource = req.session.data['question_9-what'];

    if (checkSource === 'Yes') {
        res.redirect(`details-about-diarrhoea`);

    } else {
        res.redirect(`check-your-answers-only-core`);
    }



});



// no code below here

module.exports = router
