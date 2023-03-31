import { createContext, useState } from "react";
import { allProductsRequest, categoryDividerRequest } from "../api/shoppingfyRequest";


const ShoppingifyContext = createContext();

export const ShoppingifyContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    const allProducts = async () => {
        const res = await allProductsRequest();
        setProducts(res.data);
    }

    return(
        <ShoppingifyContext.Provider value={{allProducts, setProducts, products}}>{children}</ShoppingifyContext.Provider>
    )
}

export default ShoppingifyContext;