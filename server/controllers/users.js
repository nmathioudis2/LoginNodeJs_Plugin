const JWT = require('jsonwebtoken');
const User = require('../models/user');
const {JWT_SECRET} = require('../configuration');

signToken = (user) => {
    //create token with JWT.sign which takes object  as payload(first parameter) and a secret to encode the token(2nd parameter) and check if true
    return JWT.sign({
        iss: 'LoginModule',                                     //who is the issuer
        sub: user.id,                                       //the _id from user in mongodb is the subject
        iat: new Date().getTime(),                              //time issued
        exp: new Date().setDate(new Date().getDate() + 1)       //expiration date is current date +1 day
    }, JWT_SECRET);

};

module.exports = {
    signUp: async (req, res, next) => {
        const {name, surname, email, password, confirmPassword, staff} = req.value.body;

        //check if user exists
        const foundUser = await User.findOne({email});
        if (foundUser) {
            return res.status(403).json({error: ' Email is already in use'})
        }
        if (password!==confirmPassword){
            return res.status(403).json({error: 'Passwords do not much'})
        }
        if (staff==null){
            return res.status(403).json({error:'Select Staff category'})
        }

        //create new user
        const newUser = new User({name, surname, email, password,staff});
        await newUser.save();


        //Generate token
        const token = signToken(newUser);


        //respond with token
        res.status(200).json({token:token, name: name, surname: surname, staff:staff});
    },

    signIn: async (req, res, next) => {

        const token = signToken(req.user);
        res.status(200).json({token:token});
    },

    secret: async (req, res, next) => {
        console.log('I got here');
        res.json({secret:req.user})
    }
};