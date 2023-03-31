import axios from "axios";

export const allProductsRequest = () => axios.get("/allProducts");

export const productsByCategoryRequest = (category) => axios.get(`/productsByCategory/${category}`);

export const categoryDividerRequest = () => axios.get("/categoryDivider");

export const enterProductRequest = (newProduct) => axios.post("/enterProduct", newProduct);

export const deleteAllProductsRequest = () => axios.delete("/deleteAllProducts");