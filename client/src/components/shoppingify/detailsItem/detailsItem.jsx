import './detailsItem.css';
import { useContext, useState } from 'react';
import AddNewItem from '../addNewItem/addNewItem';
import List from '../list/list';
import test from "../../imgs/test.jpg";
import ShoppingifyContext from '../../../shoppingifyContext/shoppingifyContext';

const DetailsItem = () => {

    const {deleteItemContext, productInprocessToSave} = useContext(ShoppingifyContext);


    const [detailsLayout, setDetailsLayout] = useState(true);
    const [listLayout, setListLayout] = useState(false);
    const [addItemLayout, setAddItemLayout] = useState(false);


    const deleteItem = async (e, itemName) => {
        e.preventDefault(e);
        await deleteItemContext(itemName);
        setDetailsLayout(false);
        setAddItemLayout(true);
    }

    const updateItems = async (e) => {
        e.preventDefault(e);
        setDetailsLayout(false);
        setListLayout(true);
    }


    const ItemDetailLayout = () => {

        return(
            <div className='detailsItem mx-auto'>
                {productInprocessToSave.map(p => <div key={p.name}>
                    <div> {/**imagen del producto */}
                        <img src={test} alt=""></img> {/**<img src={p.image} alt=""></img> */}
                    </div>
                    <div className='info text-left'>
                        <div>
                            <label>name</label>  {/**nombre del producto */}
                            <p>{p.name}</p>
                        </div>
                        <div>
                            <label>category</label> {/**categoria del producto */}
                            <p>{p.category}</p>
                        </div>
                        <div>
                            <label>note</label> {/**nota del producto */}
                            <p>{p.note}</p>
                        </div>
                        <form>
                            <div className='form-footer flex justify-center align-middle items-center space-x-1.5'>
                                        <button onClick={(e) => deleteItem(e, p.name)}>Cancel</button>
                                        <button className="save" onClick={(e) => updateItems(e)}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>)}
            </div>    
        )

    }


    return(
        <div>
            {detailsLayout ? <ItemDetailLayout/> : null}
            {addItemLayout ? <AddNewItem/> : null}
            {listLayout ? <List/> : null}
        </div>
    )
}

export default DetailsItem;