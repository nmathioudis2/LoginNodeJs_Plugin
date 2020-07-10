const SecurityRule = require('../models/rules');


module.exports = {
    updateRules: async (req,res,next) => {
        const {status, sTime, eTime} = req.body;
        console.log(status)
        await SecurityRule.findByIdAndUpdate('5f0726b19eb35066546d04c5',{status:status, sTime:sTime, eTime:eTime},function (err,result) {
            if(err){
                res.send(err)
            }
            else{
                res.send(result)
            }
        });

    }
};