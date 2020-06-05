const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const {ExtractJwt} = require('passport-jwt');
const LocalStrategy = require('passport-local');

const {JWT_SECRET} = require('./configuration');
const User = require('./models/user');

//JSON WEB TOKENS STRATEGY
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try {
        //Find the user specified in token
        const user = await User.findById((payload.sub));

        //if user doesn't exist
        if (!user) {
            return done(null, false);
        }

        //return user
        done(null, user);


    } catch (error) {
        done(error, false)
    }
}));

//LOCAL STRATEGY
passport.use(new LocalStrategy({
    usernameField: 'email',

}, async (email, password, done) => {
    try{
        //find User Given the email
        const user = await User.findOne({email});

        //if not handle it
        if(!user){
            return done(null,false);
        }

        //check password
        const isMatch = await user.isValidPassword(password);


        //if not handle
        if(!isMatch) {
            return done(null.false);
        }

        //if correcct return user
        done(null,user);
    }catch (error) {
        done(error,false)
    }
}));