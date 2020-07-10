const pieChart = require('../models/charts');


module.exports = {
    pieChartLocPref: async (req,res,next) => {
        const Surname =req.body;
        console.log(req.body);
        let query = Surname;
        await pieChart.find(query, {_id: 0, Surname: 0},function (err,patientCameraPrefs) {
            if(err){
                res.json({err})
            }
            else{
                res.json({patientCameraPrefs})
            }
        });
    }
};