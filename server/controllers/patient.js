const Patient = require('../models/patient');
const patientImg = require('../models/patientImg');



module.exports = {
    signUp: async (req, res, next) => {
        const {Name, Surname, Age, Registered} = req.value.body;

        //check if user exists
        const foundPatient = await Patient.findOne({Surname});
        if (foundPatient) {
            return res.status(403).json({error: ' patient is already registered'})
        }

        //create new user
        const newPatient = new Patient({Name, Surname, Age, Registered});
        await newPatient.save();


        //respond with token
        res.status(200).json({newPatient});
    },

    fetchList:  (req,res, next) => {
        console.log('I got to fetchList');
        Patient.find({},{Name:1,Surname:1,Age:1.,Registered:1,_id:0},function(err,patients){
            if(err){
                res.status(400).json('something went wrong');
                next();
            }
            res.json({patients});
        });
    },

    patientAddPhoto: async (req,res,next) => {
        console.log('lets add the phtoto');
        console.log('auto einai' + req.value.body);
        const {image} = req.value.body;

        const newPatientImg = new patientImg({image});

        await newPatientImg.save();


        res.status(200).json({newPatientImg});

    }
};