import { createContext, useState } from "react";
import { loginRequest, registerRequest, detailsRequest, editRequest } from "../api/request";


const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const [session, setSession] = useState([]);

    const getUserDetails = async (id) => {
        const res = await detailsRequest(id);
        console.log(res);
    }

    const enterUser = async (email, password) => {
        const res = await loginRequest(email, password);
        localStorage.setItem("credentials", JSON.stringify(res.data));
        setSession(JSON.parse(localStorage.getItem("credentials")));
        return 1;
    }

    const registerContext = async (name, bio, phone, email, password) => {
        await registerRequest(name, bio, phone, email, password);
    }

    const editUserContext = async (id, editUserOb) => {
        console.log(id);
        await editRequest(id, editUserOb);
    }

    return(
        <UserContext.Provider value={{getUserDetails, enterUser, registerContext, editUserContext, setSession, session}}>{children}</UserContext.Provider>
    )
}


export default UserContext;