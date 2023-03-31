import { useContext, useState } from 'react';
import UserContext from '../../../userContext/userContex';
import { Link } from 'react-router-dom';
import './detailsBody.css';

const DetailsBody = (user) => {

    const [detailsBody, setDetailsBody] = useState(true);
    const [imageFile, setImageFile] = useState([]);
    const [dropImage, setDropImage] = useState(true);
    const [image, setImage] = useState([]);

    const {editUserContext} = useContext(UserContext);


    const changeImage = (e) => {

        e.preventDefault();
        setImage(e.target.files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(e.target?.files[0]);
        reader.onload = (e) => {
            setImageFile(e.target.result);
        };
        setDropImage(false);
        
    }
    
    const edit = async (e, id) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const bio = e.target.elements.bio.value;
        const phone = e.target.elements.phone.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
      
        const editUserOb = {
            photo: image,
            name: name,
            bio: bio,
            phone: phone,
            email: email,
            password: password
        }

        await editUserContext(id, editUserOb);

    }

    const SeeInfo = () => {
        return(
            
            <div className='detailsBody mx-auto'>
            <form className='form-detailsBody text-left'>
                <div className='text-center mt-6'>
                    <label>Photo</label>
                    <div className='photo'>
                        {user.user.photo?.url.length === 0 ? <img src="" alt=""></img> : <img className='mx-auto' src={user.user.photo?.url} alt=""></img>}
                    </div>
                </div>
                <div className='details-div-input'>
                    <label>Name</label><br></br>
                    <input type="text" disabled="true" name="name" value={user.user?.name} ></input>
                </div>
                <div className='details-div-input'>
                    <label>Bio</label><br></br>
                    <textarea type="text" disabled="true" name="bio" value={user.user?.bio} ></textarea>
                </div>
                <div className='details-div-input'>
                    <label>Phone</label><br></br>
                    <input type="text" disabled="true" name="phone" value={user.user?.phone}  ></input>
                </div>
                <div className='details-div-input'>
                    <label>Email</label><br></br>
                    <input type="text" disabled="true" name="email" value={user.user?.email}  ></input>
                </div>
                <div className='details-div-input'>
                    <label>Password</label><br></br>
                    <input type="text" disabled="true" name="password" value={user.user?.password} placeholder={user?.password}></input>
                </div>
            </form>
            <button onClick={() => setDetailsBody(!detailsBody)}>Edit</button>
            <Link to="/products">Enter</Link>
        </div>
    )
        
    }

    const EditInfo = () => {
        return (
            <div className='detailsBody mx-auto'>
                <form className='form-detailsBody text-left' onSubmit={(e) => edit(e, user.user?._id)} encType="multipart/form-data">
                    { dropImage ? null :  <img src={imageFile} alt=""></img> }
                    <div>
                        <label>Photo</label><br></br>
                        <input type="file" accept='image/*' name="photo" onChange={(e) => changeImage(e)}></input>
                    </div>
                    <div className='details-div-input'>
                        <label>Name</label><br></br>
                        <input type="text" name="name" placeholder='New name'></input>
                    </div>
                    <div className='details-div-input'>
                        <label>Bio</label><br></br>
                        <textarea type="text" name="bio" placeholder='Write something about you'></textarea>
                    </div>
                    <div className='details-div-input'>
                        <label>Phone</label><br></br>
                        <input type="text" name="phone" placeholder='New phone'></input>
                    </div>
                    <div className='details-div-input'>
                        <label>Email</label><br></br>
                        <input type="text" name="email" placeholder='New email'></input>
                    </div>
                    <div className='details-div-input'>
                        <label>Password</label><br></br>
                        <input type="text" name="password" placeholder='New password'></input>
                    </div>
                    <div className='form-detailsBody-buttons text-center'>
                        <button id="saveChanges" type='submit'>Save Changes</button>
                        <button onClick={() => setDetailsBody(!detailsBody)}>Cancel Edit</button>
                    </div>
                </form>
            </div>
        )
    }

    return(
        <div>
               { detailsBody ? <SeeInfo/> : <EditInfo/> }
        </div>
     
    )

   
}

//      <input type="file" accept='image/*' name="photo" onChange={(e) => setImage(e.target.files[0])}></input>

export default DetailsBody;