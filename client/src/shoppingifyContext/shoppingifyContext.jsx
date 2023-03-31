import { createContext, useState } from "react";
import { allProductsRequest } from "../api/shoppingfyRequest";


const ShoppingifyContext = createContext();

export const ShoppingifyContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    
    const [listLayout, setListLayout] = useState();
    const [addItemLayout, setAddItemLayout] = useState();
    const [itemDetailsLayout, setItemDetailsLayout] = useState();

    const allProducts = async () => {
        const res = await allProductsRequest();
        setProducts(res.data);
    }

    return(
        <ShoppingifyContext.Provider value={{allProducts, setProducts, products, listLayout, setListLayout, addItemLayout, setAddItemLayout, itemDetailsLayout, setItemDetailsLayout}}>{children}</ShoppingifyContext.Provider>
    )
}

export default ShoppingifyContext;