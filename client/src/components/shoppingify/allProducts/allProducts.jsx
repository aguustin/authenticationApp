import { useContext, useEffect } from 'react';
import NavegationShopping from '../navegationShopping/navegationShopping';
import ShoppingifyContext from '../../../shoppingifyContext/shoppingifyContext';
import AllProductsBody from '../allProductsBody/allProductsBody';
import List from '../list/list';
import './allProducts.css';

const AllProducts = () => {

    const {allProducts, addToListQuantityContext, products} = useContext(ShoppingifyContext);

    useEffect(() => {
        allProducts();
        addToListQuantityContext();
    }, [])

    console.log(products);


    return(
        
        <div className='allProducts flex'>
            <NavegationShopping/>
           <div className='allProductsNav'>
            <div className='flex mx-auto'>
                <div className='title mx-auto'>
                    <h1>Shoppingfy allows you take your shopping list wherever you go</h1>
                </div>
                <div className='search mx-auto'>
                    <input type="text" name="search" placeholder='search'></input>
                </div>
            </div>
            {
           products.map(p => 
                <AllProductsBody key={p._id} {...p} />
           )} 
           </div>
            <div className='lai'>
                    <List />
            </div>
        
        </div>
    )
}

export default AllProducts;