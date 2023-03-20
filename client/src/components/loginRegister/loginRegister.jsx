import './loginRegister.css';
//import devchallengesLight from '../../img/devchallenges-light.svg';
import devchallenges from '../../img/devchallenges.svg';
import facebook from '../../img/Facebook.svg';
import github from '../../img/Gihub.svg';
import google from '../../img/Google.svg';
import twitter from '../../img/Twitter.svg';
import { useState } from 'react';

const LoginRegister = () => {

    const [changeForm, setChangeForm] = useState(true);
    console.log(process.env.GOOGLE_URI);

    const googleAcount = () => {
        window.open(
            `http://localhost:4000/google/callback`,
            "_self"
        );
    };

    const facebookAcount = () => {
        window.open(
            `http://localhost:4000/facebook/callback`,
            "_self"
        );
    };

    const twitterAcount = () => {
        window.open(
            `http://localhost:4000/twitter/callback`,
            "_self"
        );
    };

    const githubAcount = () => {
        window.open(
            `http://localhost:4000/github/callback`,
            "_self"
        );
    };

    return(
        <div className="loginRegister mx-auto rounded-3xl">
            <div className='text-left mx-auto'>
                <img src={devchallenges} alt=""></img>
                {changeForm ? <p>Join thousands of leaners from around the world</p> : <p>Login</p>}
                {changeForm ? <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem </p> : null}
            </div>
            <form>
                <div className="form-input">
                    <input className="rounded-xl" type="" name="email" placeholder="Email"></input>
                </div>
                <div className='form-input'>
                    <input className="rounded-xl" type="" name="password" placeholder="Password"></input>
                </div>
                { changeForm ? <button className='form-button rounded-xl font-bold' type="submit">Start Coding Now</button>
                 : <button className='form-button rounded-xl font-bold' type="submit">Login</button> }
            </form>
          
            <div className='social'>
                <p className='mt-6'>or continue with these social profile</p>
                    <div className='flex mx-auto justify-center mt-4'>
                       
                         <button onClick={googleAcount}><img src={google} alt=""></img></button>
                         <button onClick={facebookAcount}></button><img src={facebook} alt=""></img>
                         <button onClick={twitterAcount}></button><img src={twitter} alt=""></img>
                         <button onClick={githubAcount}></button><img src={github} alt=""></img>
                    </div>
                {changeForm ? <p className='mt-4'>already a member? <button onClick={() => setChangeForm(!changeForm)}>Login</button></p> :
                <p className='mt-4'>Dont have account yet? <button onClick={() => setChangeForm(!changeForm)}>Register</button></p> }
            </div>
        </div>
    )

}

export default LoginRegister;