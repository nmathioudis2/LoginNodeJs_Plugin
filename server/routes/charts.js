const express = require('express');
const router = require('express-promise-router')();

const ChartsController = require('../controllers/charts');

router.route('/pieChartLocationPreference')
    .post(ChartsController.pieChartLocPref);

module.exports = router;