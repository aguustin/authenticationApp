import './addNewItem.css';
import List from '../list/list';
import { useContext, useState } from 'react';
import DetailsItem from '../detailsItem/detailsItem';
import ShoppingifyContext from '../../../shoppingifyContext/shoppingifyContext';

const AddNewItem = () => {

    const { updateList } = useContext(ShoppingifyContext);
    const [addItemLayout, setAddItemLayout] = useState(true);
    const [listLayout, setListLayout] = useState(false);
    const [detailsLayout, setDetailsLayout] = useState(false);

    const setList = (e) => {
        e.preventDefault();
        setAddItemLayout(false);
        setListLayout(true);
    }

    const updateItems = async (e) => {

        e.preventDefault();

        const newProduct = {
            name: e.target.elements.name.value,
            note: e.target.elements.note.value,
            image: e.target.elements.image.value,
            category: e.target.elements.category.value
        }

        await updateList(newProduct);

        setAddItemLayout(false);
        setDetailsLayout(true);
    }
 

    const AddNewItemLayout = () => {
        return(
            <div className='addNewItem text-left mx-auto'>
                <div className='flex'>
                    <h1>Add new item</h1>
                </div>
                <form className="relative" onSubmit={(e) => updateItems(e)}>
                    <div className='form-group'> {/**ingresar nombre del nuevo producto -> nombre */}
                        <input className='form-input' type="text" name="name" placeholder='Enter name'></input>
                        <label className='form-label'>Name</label>
                    </div>
                    <div className='form-group'> {/**ingresar nota del nuevo producto -> nota */}
                        <input className='form-textarea' type="text" name="note" placeholder=' '></input>
                        <label className='form-label'>Note (optional)</label>
                    </div>
                    <div className='form-group'> {/**ingresar imagen del nuevo producto -> imagen */}
                        <textarea className='form-input' type="text" name="image" placeholder='Enter image'></textarea>
                        <label className='form-label'>Image (optional)</label>
                    </div>
                    <div className='form-group'> {/**ingresar categoria del nuevo producto -> categoria */}
                        <input className='form-input' type="text" name="category" placeholder='Enter category'></input>
                        <label className='form-label'>Category</label>
                    </div>
                    <div className='form-footer flex justify-center align-middle items-center space-x-1.5'>
                        <button onClick={(e) => setList(e)}>Cancel</button>
                        <button className="save" type="submit">Save</button>  {/** <button className="save" onClick={(e) => setDetails(e)}>Save</button> */}
                    </div> 
                </form>
            </div>    
        )
    
    }


    return(
        <div>
            {addItemLayout ? <AddNewItemLayout/> : null}
            {listLayout ? <List/> : null}
            {detailsLayout ? <DetailsItem/> : null}
        </div>
    )
}

export default AddNewItem;