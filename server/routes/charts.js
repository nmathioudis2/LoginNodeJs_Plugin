const express = require('express');
const router = require('express-promise-router')();

const ChartsController = require('../controllers/charts');

router.route('/pieChartLocationPreference')
    .post(ChartsController.pieChartLocPref);

router.route('/lineTimeDiagram')
    .post(ChartsController.lineTimeDiagram);

module.exports = router;