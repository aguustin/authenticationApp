
import passport from "passport";
import { Router } from "express";
import googleAuth20 from 'passport-google-oauth20';
const router = Router();


const GoogleStrategy = (googleAuth20).Strategy;

    passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET_ID,
        callbackURL: "/google/callback"
      },
      function(accessToken, refreshToken, profile, cb) {
          return cb(null, profile);
      }
    ));

    passport.serializeUser((user, done) => {
        done(null, user);
    })

    passport.deserializeUser((user, done) => {
        done(null, user)
    })


router.get("/google/callback", 
passport.authenticate('google', 
{ 
    successRedirect: "http://localhost:3000/details",
    failureRedirect: "/",
    scope: ['email', 'profile'] })
);


export default router;