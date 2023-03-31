import './addNewItem.css';
import List from '../list/list';
import { useState } from 'react';
import DetailsItem from '../detailsItem/detailsItem';

const AddNewItem = () => {

    const [addItemLayout, setAddItemLayout] = useState(true);
    const [listLayout, setListLayout] = useState(false);
    const [detailsLayout, setDetailsLayout] = useState(false);

    const setList = (e) => {
        e.preventDefault();
        setAddItemLayout(false);
        setListLayout(true);
    }

    const setDetails = (e) => {
        e.preventDefault();
        setAddItemLayout(false);
        setDetailsLayout(true);
    }

    const AddNewItemLayout = () => {
        return(
            <div className='addNewItem text-left mx-auto'>
                <div className='flex'>
                    <h1>Add new item</h1>
                </div>
                <form className="relative">
                    <div className='form-group'>
                        <input className='form-input' type="text" name="name" placeholder='Enter name'></input>
                        <label className='form-label'>Name</label>
                    </div>
                    <div className='form-group'>
                        <input className='form-textarea' type="text" name="note" placeholder=' '></input>
                        <label className='form-label'>Note (optional)</label>
                    </div>
                    <div className='form-group'>
                        <textarea className='form-input' type="text" name="image" placeholder='Enter image'></textarea>
                        <label className='form-label'>Image (optional)</label>
                    </div>
                    <div className='form-group'>
                        <input className='form-input' type="text" name="category" placeholder='Enter category'></input>
                        <label className='form-label'>Category</label>
                    </div>
                    <div className='form-footer flex justify-center align-middle items-center space-x-1.5'>
                        <button onClick={(e) => setList(e)}>Cancel</button>
                        <button className="save" onClick={(e) => setDetails(e)}>Save</button>
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