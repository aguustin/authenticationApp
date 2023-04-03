import axios from "axios";

export const allProductsRequest = () => axios.get("/allProducts");

export const productsByCategoryRequest = (category) => axios.get(`/productsByCategory/${category}`);

export const enterProductRequest = (newProduct) => axios.post("/enterProduct", newProduct);

export const updateListRequest = () => axios.get("/updateList");

export const deleteOneItem = (itemName) => axios.delete(`/deleteOneItem/${itemName}`);

export const deleteAllProductsRequest = () => axios.delete("/deleteAllProducts");