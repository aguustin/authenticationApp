
import { useContext } from 'react';
import './allProductsBody.css';
import ShoppingifyContext from '../../../shoppingifyContext/shoppingifyContext';

const AllProductsBody = (p) => {

    const {addToListQuantityContext} = useContext(ShoppingifyContext);
    let obtain = [];

    p.propierties.forEach(element => {
        obtain.push(element.name);
    });
   
    const addToListQuantity = async (e, category, name) => {
       
        e.preventDefault();
        await addToListQuantityContext(category, name);
    }
    
    return(
        <div>
             <div className='itemLists'>
                <div>
                    <h2>{p.category}</h2>
                    <div className='flex flex-wrap'>
                    {obtain.map((o) => <button onClick={(e) => addToListQuantity(e, p.category, o)}><label className='itemName'>{o}</label><label className='agregar'>+</label></button>)}
                    </div>
                </div> 
             </div>
         
        </div>
    )
}

export default AllProductsBody;