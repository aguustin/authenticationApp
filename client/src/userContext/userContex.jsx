import { createContext, useState } from "react";
import { RegisterRequest, DetailsRequest } from "../api/request";


const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const [userDetail, setUserDetail] = useState([]);

    const getUserDetails = async (id) => {
        const res = await DetailsRequest(id);
        setUserDetail(res.data);
    }

    const registerContext = async (userEdit) => {
        await RegisterRequest(userEdit);
    }

    return(
        <UserContext.Provider value={{getUserDetails, registerContext, userDetail}}>{children}</UserContext.Provider>
    )
}


export default UserContext;