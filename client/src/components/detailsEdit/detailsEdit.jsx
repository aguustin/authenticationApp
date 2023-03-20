import './detailsEdit.css';
import google from '../../img/Google.svg';
import { useContext, useEffect, useState } from 'react';
import DetailsBody from '../detailsBody/detailsBody';
import UserContext from '../../userContext/userContex';

const DetailsEdit = () => {

    const [edition, setEdition] = useState(false);
    const {getUserDetails, registerContext, userDetail} = useContext(UserContext);
    
    useEffect(() => {
      (async() => {
        await getUserDetails();
      })()
    }, [])

    const Details = () => {
        return(
            <div className='details rounded-3xl'>
                <p>Profile</p>
                <p>Basic info, like your name and photo</p>
                <table className="detailsEdit table-fixed text-left mx-auto">
            <thead>
            <div className='profile'>
                <h3>Profile</h3>
                <p>Some info maybe visible to other people</p>
           </div>
                <button className='rounded-3xl' onClick={() => setEdition(!edition)}>Edit</button>
            </thead>
            {userDetail.map(user =>
              <DetailsBody user={user} key={user._id} />
            )}
              
          </table>
            </div>
            
        )
    }

    const Edit = () => {

      const registerUser = async (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const bio = e.target.elements.bio.value;
        const phone = e.target.elements.phone .value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        const userEdit = {
            name: name,
            bio: bio,
            phone: phone,
            email: email,
            password: password
        }

        await registerContext(userEdit);
      }

        return(
            <div>
            <button> Back</button>
            <div className='edit mx-auto rounded-3xl'>
           
            <div>
                <h2>Change Info</h2>
                <p>Changes will be reflected to every service</p>

                <form onSubmit={(e) => registerUser(e)}>
                    <div>
                        <img src="" alt=""></img>
                        <button>change photo</button>
                    </div>
                    <div className='mt-6'>
                        <label for="name">name</label><br></br>
                        <input className='form-input' type="text" name="name" placeholder="enter your name..."></input>
                    </div>
                    <div>
                        <label for="bio">bio</label><br></br>
                        <textarea className='form-input' type="text" name="bio" placeholder="enter your bio..."></textarea>
                    </div>
                    <div>
                        <label for="phone">phone</label><br></br>
                        <input className='form-input' type="text" name="phone" placeholder="enter your phone..."></input>
                    </div>
                    <div>
                        <label for="email">email</label><br></br>
                        <input className='form-input' type="text" name="email" placeholder="enter your email..."></input>
                    </div>
                    <div>
                        <label for="password">password</label><br></br>
                        <input className='form-input' type="password" name="password" placeholder="enter your new password..."></input>
                    </div>

                    <button type="submit" id="save">Save</button>
                </form>
            </div>
                
            </div>
            </div>
    )
        
    }

    return(
        <div>
            {edition ? <Details/> : <Edit/>}
        </div>
    )

 
}

export default DetailsEdit;