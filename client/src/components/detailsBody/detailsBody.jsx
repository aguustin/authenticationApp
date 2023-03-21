import { useContext } from 'react';
import google from '../../img/Google.svg';
import UserContext from '../../userContext/userContex';

const DetailsBody = (user) => {

    const {editUserContext} = useContext(UserContext);

    const edit = async (e, id) => {

        const name = e.target.elements.name.value;
        const bio = e.target.elements.bio.value;
        const phone = e.target.elements.phone.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        await editUserContext(id);
    }

    return (
        <div>
            <form onSubmit={(e) => edit(e, user._id)}>
                <div>
                    <label>Photo</label>
                    <input type="text" disabled="true" ></input>
                </div>
                <div>
                    <label>Name</label>
                    <textarea type="text" disabled="true" name="name" value={user.name}></textarea>
                </div>
                <div>
                    <label>Bio</label>
                    <textarea type="text" disabled="true" name="bio" value={user.bio}></textarea>
                </div>
                <div>
                    <label>Phone</label>
                    <input type="text" disabled="true" name="phone" value={user.phone}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" disabled="true" name="email" value={user.email}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" disabled="true" name="password" value={user.password}></input>
                </div>
            </form>
        </div>
    )
}

export default DetailsBody;