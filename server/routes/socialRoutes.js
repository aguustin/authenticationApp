
import passport from "passport";
import { Router } from "express";
import googleAuth20 from 'passport-google-oauth20';
import facebookAuth20 from "passport-facebook";
import twitterAuth20 from "passport-twitter";
import githubAuth20 from "passport-github2";

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
        scope: ['email', 'profile'] }
        )
        );

/*const FacebookStrategy = (facebookAuth20).Strategy;

    passport.use(new FacebookStrategy({
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "/facebook/callback"
      },
      function(accessToken, refreshToken, profile, cb) {
          return cb(null, profile);
      }
    ));

    const GithubStrategy = (githubAuth20).Strategy;

    passport.use(new GithubStrategy({
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "/github/callback"
      },
      function(accessToken, refreshToken, profile, cb) {
          return cb(null, profile);
      }
    ));

    const TwitterStrategy = (twitterAuth20).Strategy;

    passport.use(new TwitterStrategy({
        consumerKey: TWITTER_CONSUMER_KEY,
        consumerSecret: TWITTER_CONSUMER_SECRET,
        callbackURL: "/twitter/callback"
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
        scope: ['email', 'profile'] }
        )
        );
        
        router.get("/facebook/callback",
        passport.authenticate('facebook',
        {
            successRedirect: "http://localhost:3000/details",
            failureRedirect: "/",
            scope: ['email', 'profile'] }
            )
        );

        router.get("/twitter/callback",
        passport.authenticate('twitter',
        {
            successRedirect: "http://localhost:3000/details",
            failureRedirect: "/",
            scope: ['email', 'profile'] }
            )
        );

        router.get("/github/callback",
passport.authenticate('github',
{
    successRedirect: "http://localhost:3000/details",
    failureRedirect: "/",
    scope: ['email', 'profile'] }
    )
);*/


export default router;