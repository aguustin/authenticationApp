import { createContext, useState } from "react";
import { LoginRequest, RegisterRequest, DetailsRequest, EditRequest } from "../api/request";


const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const [userDetail, setUserDetail] = useState([]);

    const getUserDetails = async (id) => {
        const res = await DetailsRequest(id);
        setUserDetail(res.data);
    }

    const enterUser = async (email, password) => {
        await LoginRequest(email, password);
    }

    const registerContext = async (name, bio, phone, email, password) => {
        await RegisterRequest(name, bio, phone, email, password);
    }

    const editUserContext = async (id) => {
        await EditRequest(id);
    }

    return(
        <UserContext.Provider value={{getUserDetails, enterUser, registerContext, editUserContext, userDetail}}>{children}</UserContext.Provider>
    )
}


export default UserContext;