const express = require('express');
const router = require('express-promise-router')();



const {validateBody, schemas} = require('../helpers/routeHelpers');
const PatientController = require('../controllers/patient.js');

router.route('/signupPatient')
    .post(validateBody(schemas.patientSchema),PatientController.signUp);

router.route('/fetchPatientList')
    .get(PatientController.fetchList);

// router.route('/update')
//     .post(validateBody(schemas.patientSchema),PatientController.update);


module.exports = router;