const pieChart = require('../models/charts');
const LineChart = require('../models/lineChart');


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
    },

    lineTimeDiagram: async (req,res,next) => {
        const Surname =req.body;
        let query = Surname;
        await LineChart.find(query, {_id: 0, Surname: 0},function (err,patienttimediagrams) {
            if(err){
                res.json({err})
            }
            else{
                res.json({patienttimediagrams})
            }
        });
    }
};