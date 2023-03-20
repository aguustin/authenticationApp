import google from '../../img/Google.svg';

const DetailsBody = (user) => {
    return (
        <div>
            <form>
                <div>
                    <label>Photo</label>
                    <input type="text" disabled="true" ></input>
                </div>
                <div>
                    <label>Name</label>
                    <textarea type="text" disabled="true" value={user.name}></textarea>
                </div>
                <div>
                    <label>Bio</label>
                    <textarea type="text" disabled="true" value={user.bio}></textarea>
                </div>
                <div>
                    <label>Phone</label>
                    <input type="text" disabled="true" value={user.phone}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" disabled="true" value={user.email}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" disabled="true" value={user.password}></input>
                </div>
            </form>
        </div>
    )
}

export default DetailsBody;