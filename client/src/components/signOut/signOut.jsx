import { useNavigate } from "react-router-dom";
import UserContext from "../../userContext/userContex";
import { useContext } from "react";

const SignOut = () => {

    const { setSession, session } = useContext(UserContext);
    console.log(session);
    const navigate = useNavigate();
    localStorage.clear();
    setSession([]);
    navigate("/");

}

export default SignOut;