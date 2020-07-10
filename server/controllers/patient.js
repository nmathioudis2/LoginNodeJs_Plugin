const fs = require('fs');

const Patient = require('../models/patient');
const patientImg = require('../models/patientImg');
const patientEvent = require('../models/patientEvent');
const activity = require('../models/activities')


module.exports = {

    //Sign Up Patients
    signUp: async (req, res, next) => {
        const {Name, Surname, Age, Registered, Image} = req.value.body;
        //check if user exists
        const foundPatient = await Patient.findOne({Surname});
        if (foundPatient) {
            return res.status(403).json({error: ' patient is already registered'})
        }
        //create new user
        const newPatient = new Patient({Name, Surname, Age, Registered, Image});
        let dateTime = new Date();
        const newEvent = new patientEvent({
            surname: Surname,
            event: 'Registered at ' + dateTime.toISOString().slice(0, 10),
            eventDate: dateTime.toISOString().slice(0, 10)
        });
        await newPatient.save();
        await newEvent.save();
        //respond with newPatient data
        res.status(200).json({newPatient});
    },


    //fetch all patients
    fetchList: (req, res, next) => {
        Patient.find({}, {Name: 1, Surname: 1, Age: 1., Registered: 1, _id: 0}, function (err, patients) {
            if (err) {
                res.status(400).json('something went wrong');
                next();
            }
            res.json({patients});
        });
    },

    //add new patient with photo simultaneously to DB
    patientAddPhotoToDb: async (req, res, next) => {
        const {Name, Surname, Age, Registered} = req.value.body;
        const newPatient = new Patient({Name, Surname, Age, Registered, Image: req.file.buffer});
        await newPatient.save();
        res.send()
    },

    //add patient photo
    patientAddPhoto: async (req, res, next) => {
        const {surname, imagePath} = req.value.body;

        //check if user exists
        const foundpatientImg = await patientImg.findOne({surname});
        if (foundpatientImg) {
            return res.status(403).json({error: ' patient has already got a photo'})
        }

        //create new user
        const newpatientImg = new patientImg({surname, imagePath});
        await newpatientImg.save();

        //respond with token
        res.status(200).json({newpatientImg});

    },


    //add photo to patient after creation
    updatePatient: async (req, res, next) => {

        const {Surname, Image} = req.body;
        let data = Image.replace(/^data:image\/\w+;base64,/, "");
        let buff = Buffer.from(data, 'base64');
        console.log(data);
        fs.writeFileSync('avatar.jpg', buff);
        var img = fs.readFileSync('avatar.jpg');
        await Patient.findOneAndUpdate({Surname}, {Image: img});
        return res.send()
    },


    fetchPatientEvents: async (req, res, next) => {
        const Surname =req.body;
        let query = Surname;
        patientEvent.find((query), {_id: 0,Surname:0, __v: 0}, function (err, patientevents) {
            if (err) {
                res.status(400).json('something went wrong');
                next();
            }
            res.json(patientevents)
            console.log(patientevents)
        })
    },

    addPatientEvent: async (req, res, next) => {
        const {Surname, Event, EventDate, StartTime, Duration} = req.body;
        const newPatientEvent = new patientEvent({Surname, Event, EventDate, StartTime, Duration});
        await newPatientEvent.save();
        res.send()
    },


    newPatientID: async (req, res, next) => {
        const {Name, Surname, Age, Registered} = req.value.body;
        Patient.findOne({Surname}, {Name: 1, Surname: 1, Age: 1., Registered: 1, _id: 1}, function (err, patient) {
            if (err) {
                res.status(400).json('something went wrong');
                next();
            }
            res.json({patient});
        });
                //respond with token
        res.status(200).json({newPatient});
    },

    addActivity: async (req, res, next) => {
        const {Activity, Coordinator} = req.body;
        const newActivity = new activity({Activity, Coordinator});
        await newActivity.save();
        res.send()
    },


    fetchActivities: (req, res, next) => {
        activity.find({}, {_id: 0, __v: 0}, function (err, activities) {
            if (err) {
                res.status(400).json('something went wrong');
                next();
            }
            res.json({activities});
            console.log(activities)
        });
    }

};