import { createContext, useState } from "react";
import { allProductsRequest, enterProductRequest, addToListQuantityRequest } from "../api/shoppingfyRequest";


const ShoppingifyContext = createContext();

export const ShoppingifyContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [productsInList, setProductsInList] = useState([]); 
    const [productInprocessToSave, setProductInprocessToSave] = useState([]);
    const [listLayout, setListLayout] = useState();
    const [addItemLayout, setAddItemLayout] = useState();
    const [itemDetailsLayout, setItemDetailsLayout] = useState();

    const allProducts = async () => {
        const res = await allProductsRequest();
        setProducts(res.data);
        
    }

    const saveItemContext = async (newProduct) => {

        const res = await enterProductRequest(newProduct);
        
        if(res){
            setProducts([...products, res.data]);
        }else{
            setProductInprocessToSave(null);
        }
        
    }

    const updateList = async (newProduct) => {
        setProductInprocessToSave([newProduct]);
    }

    const addToListQuantityContext = async (category, name) => {
        const res = await addToListQuantityRequest(category, name);
        setProductsInList([productsInList, res.data]);
    }
 
    return(
        <ShoppingifyContext.Provider 
        value={{allProducts, 
        setProducts, 
        saveItemContext, 
        updateList, 
        addToListQuantityContext, 
        products,
        productsInList, 
        listLayout, 
        setListLayout, 
        addItemLayout, 
        setAddItemLayout, 
        itemDetailsLayout, 
        setItemDetailsLayout, 
        productInprocessToSave}}>
        {children}
        </ShoppingifyContext.Provider>
    )
}

export default ShoppingifyContext;