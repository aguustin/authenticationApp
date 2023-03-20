import axios from "axios";

export const LoginRequest = () => axios.post("/login");

export const RegisterRequest = () => axios.post("/registerUser");

export const DetailsRequest = (id) => axios.get(`/details/${id}`);

export const EditRequest = (id) => axios.put(`/edit/${id}`);