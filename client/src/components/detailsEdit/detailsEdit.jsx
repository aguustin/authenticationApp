import './detailsEdit.css';
import google from '../../img/Google.svg';
import { useState } from 'react';


const DetailsEdit = () => {

    const [edition, setEdition] = useState(false);

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
            <tbody>
              <tr>
                <td>Photo</td>
                <td><img src={google} alt=""></img></td>
              </tr>
              <tr>
                <td>Name</td>
                <td>The Eagles</td>
              </tr>
              <tr>
                <td>Bio</td>
                <td>Earth, Wind, and Fire</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>Malcolm Lockyer</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>The Eagles</td>
              </tr>
              <tr>
                <td>Password</td>
                <td>Earth, Wind, and Fire</td>
              </tr>
            </tbody>
          </table>
            </div>
            
        )
    }

    const Edit = () => {
        return(
            <div>
            <button>  Back</button>
            <div className='edit mx-auto rounded-3xl'>
           
            <div>
                <h2>Change Info</h2>
                <p>Changes will be reflected to every service</p>
                <form>
                    <div>
                        <img src="" alt=""></img>
                        <button>change photo</button>
                    </div>
                    <div className='mt-6'>
                        <label for="name">name</label><br></br>
                        <input className='form-input' type="text" placeholder="enter your name..."></input>
                    </div>
                    <div>
                        <label for="bio">bio</label><br></br>
                        <textarea className='form-input' type="text" placeholder="enter your bio..."></textarea>
                    </div>
                    <div>
                        <label for="phone">phone</label><br></br>
                        <input className='form-input' type="text" placeholder="enter your phone..."></input>
                    </div>
                    <div>
                        <label for="email">email</label><br></br>
                        <input className='form-input' type="text" placeholder="enter your email..."></input>
                    </div>
                    <div>
                        <label for="password">password</label><br></br>
                        <input className='form-input' type="password" placeholder="enter your new password..."></input>
                    </div>

                    <button id="save">Save</button>
                </form>
            </div>
                
            </div>
            </div>
    )
        
    }

    return(
        <div>
            {edition ? <Edit/> : <Details/>}
        </div>
    )

 
}

export default DetailsEdit;