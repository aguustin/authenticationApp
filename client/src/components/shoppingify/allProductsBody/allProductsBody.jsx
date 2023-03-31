
import './allProductsBody.css';

const AllProductsBody = (p) => {

    
    let obtain = [];
    p.propierties.forEach(element => {
        obtain.push(element.name);
    });

    const addToList = (e, id) => {
        e.preventDefault();
        const itemId = id;
        console.log(itemId);
    }
    
    return(
        <div>
             <div className='itemLists'>
                <div>
                    <h2>{p.category}</h2>
                    <div className='flex flex-wrap'>
                        {obtain.map((o) => <button onClick={(e) => addToList(e, o._id)}><label className='itemName'>{o}</label><label className='agregar'>+</label></button>)}
                    </div>
                </div> 
             </div>
         
        </div>
    )
}

export default AllProductsBody;