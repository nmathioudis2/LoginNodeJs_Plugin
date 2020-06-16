const Patient = require('../models/patient');


module.exports = {
    signUp: async (req, res, next) => {
        const {name, surname, age, firstEntryDate } = req.value.body;

        //check if user exists
        const foundPatient = await Patient.findOne({name});
        if (foundPatient) {
            return res.status(403).json({error: ' patient is already registered'})
        }

        //create new user
        const newPatient = new Patient({name, surname, age, firstEntryDate});
        await newPatient.save();


        //respond with token
        res.status(200).json({newPatient});
    }


};