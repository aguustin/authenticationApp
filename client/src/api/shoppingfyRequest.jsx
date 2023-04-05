import axios from "axios";

export const allProductsRequest = () => axios.get("/allProducts");

export const productsByCategoryRequest = (category) => axios.get(`/productsByCategory/${category}`);

export const enterProductRequest = (newProduct) => axios.post("/enterProduct", newProduct);

export const addToListQuantityRequest = (category, name) => axios.post(`/addToListQuantity/${category}/${name}`);

export const deleteAllProductsRequest = () => axios.delete("/deleteAllProducts");