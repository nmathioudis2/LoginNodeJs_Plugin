const express = require('express');
const router = require('express-promise-router')();
const multer = require('multer');

const upload = multer({
    // dest: './server/patientImages',
    limits: {
        fileSize: 100000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }
        cb(undefined, true)
    }
});


const {validateBody, schemas} = require('../helpers/routeHelpers');
const PatientController = require('../controllers/patient.js');


router.route('/signupPatient')
    .post(validateBody(schemas.patientSchema), PatientController.signUp);

// router.route('/signupPatient')
//     .get(PatientController.getNewPatientData);

router.route('/fetchPatientList')
    .get(PatientController.fetchList);

router.route('/patientAddPhoto')
    .post(validateBody(schemas.patientImgSchema), PatientController.patientAddPhoto);

router.route('/patientAddPhotoToDb')
    .post(upload.single('upload'), PatientController.patientAddPhotoToDb);

router.route('/updatePatient')
    .post(upload.single('upload'), PatientController.updatePatient);


// router.route('/newPatientID/:surname')
//     .get(PatientController.newPatientID);


// router.route('/update')
//     .post(validateBody(schemas.patientSchema),PatientController.update);


module.exports = router;