const express = require('express');
const router = require('express-promise-router')();

const {validateBody, schemas} = require('../helpers/routeHelpers');
const RulesController = require('../controllers/rules.js');


router.route('/addRules')
    .post(RulesController.updateRules);

router.route('/notifications')
    .post(RulesController.fetchnotfications);

module.exports = router;