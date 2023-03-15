import axios from "axios";

export const Login = () => axios.post("/login");

export const Register = () => axios.post("/registerUser");

export const Details = (id) => axios.get(`/details/${id}`);

export const Edit = (id) => axios.put(`/edit/${id}`);