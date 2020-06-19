const Patient = require('../models/patient');


module.exports = {
    signUp: async (req, res, next) => {
        const {patientName, patientSurname, patientAge, firstEntryDate} = req.value.body;

        //check if user exists
        const foundPatient = await Patient.findOne({patientSurname});
        if (foundPatient) {
            return res.status(403).json({error: ' patient is already registered'})
        }

        //create new user
        const newPatient = new Patient({patientName, patientSurname, patientAge, firstEntryDate});
        await newPatient.save();


        //respond with token
        res.status(200).json({newPatient});
    },

    fetchList:  (req,res, next) => {
        console.log('I got to fetchList');
        Patient.find({},{patientName:1,patientSurname:1,patientAge:1,firstEntryDate:1,_id:0},function(err,patients){
            if(err){
                res.status(400).json('something went wrong');
                next();
            }
            res.json({patients});
        });


    }
};