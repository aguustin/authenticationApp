import axios from "axios";

export const LoginRequest = (email, password) => axios.post("/login", email, password);

export const RegisterRequest = (name, bio, phone, email, password) => axios.post("/registerUser", name, bio, phone, email, password);

export const DetailsRequest = (id) => axios.get(`/details/${id}`);

export const EditRequest = (id) => axios.put(`/edit/${id}`);