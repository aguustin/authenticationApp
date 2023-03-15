import axios from "axios";

export const googleAuth = () => axios.get("/google/callback");