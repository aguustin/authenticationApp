import { createContext, useState } from "react";
import { allProductsRequest, enterProductRequest, updateListRequest,deleteOneItem } from "../api/shoppingfyRequest";


const ShoppingifyContext = createContext();

export const ShoppingifyContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);
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
            setProductInprocessToSave([newProduct]);
            setProducts([...products, res.data]);
        }else{
            setProductInprocessToSave(null);
        }
        
    }

    const deleteItemContext = async (itemName) => {
        await deleteOneItem(itemName);
        setProductInprocessToSave(" ");
    }

    const updateList = async () => {
        const res = await updateListRequest();
        setProducts([...products, res.data]);
    }

    return(
        <ShoppingifyContext.Provider value={{allProducts, setProducts, saveItemContext, deleteItemContext, updateList, products, listLayout, setListLayout, addItemLayout, setAddItemLayout, itemDetailsLayout, setItemDetailsLayout, productInprocessToSave}}>{children}</ShoppingifyContext.Provider>
    )
}

export default ShoppingifyContext;