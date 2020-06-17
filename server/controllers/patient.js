const Patient = require('../models/patient');


module.exports = {
    signUp: async (req, res, next) => {
        const {patientName, patientSurname, patientAge, firstEntryDate } = req.value.body;

        //check if user exists
        const foundPatient = await Patient.findOne({patientSurname});
        if (foundPatient) {
            return res.status(403).json({error: ' patient is already registered'})
        }
        const event = {
            date: '',
            description:''
        };

        //create new user
        const newPatient = new Patient({patientName, patientSurname, patientAge, firstEntryDate});
        await newPatient.save();


        //respond with token
        res.status(200).json({newPatient});
    }


};