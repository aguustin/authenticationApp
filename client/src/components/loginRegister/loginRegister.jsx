import './loginRegister.css';
//import devchallengesLight from '../../img/devchallenges-light.svg';
import devchallenges from '../../img/devchallenges.svg';
import facebook from '../../img/Facebook.svg';
import github from '../../img/Gihub.svg';
import google from '../../img/Google.svg';
import twitter from '../../img/Twitter.svg';
import { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../../userContext/userContex';

const LoginRegister = () => {

    const {enterUser} = useContext(UserContext);
    const [changeForm, setChangeForm] = useState(true);

    const enter = async (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        enterUser(email, password);
    }

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
            <form onSubmit={(e) => enter(e)}>
                <div className="form-input">
                    <input className="rounded-xl" type="text" name="email" placeholder="Email"></input>
                </div>
                <div className='form-input'>
                    <input className="rounded-xl" type="password" name="password" placeholder="Password"></input>
                </div>
                { changeForm ? <button className='form-button rounded-xl font-bold' type="submit">Start Coding Now</button>
                 : <button className='form-button rounded-xl font-bold' type="submit">Login</button> }
            </form>
          
            <div className='social'>
                <p className='mt-6'>or continue with these social profile</p>
                    <div className='flex mx-auto justify-center mt-4'>
                       
                         <button onClick={googleAcount}><img src={google} alt=""></img></button>
                         <button onClick={facebookAcount}><img src={facebook} alt=""></img></button>
                         <button onClick={twitterAcount}><img src={twitter} alt=""></img></button>
                         <button onClick={githubAcount}><img src={github} alt=""></img></button>
                    </div>
                {changeForm ? <p className='mt-4'>already a member? <button onClick={() => setChangeForm(!changeForm)}>Login</button></p> :
                <p className='mt-4'>Dont have account yet? <button onClick={() => setChangeForm(!changeForm)}>Register</button></p> }
            </div>
        </div>
    )

}

export default LoginRegister;