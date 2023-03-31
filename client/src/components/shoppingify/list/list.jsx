import { useState } from "react";
import './list.css';
import source from '../../imgs/source.svg';

const List = () => {

    const [listLayout, setListLayout] = useState(true);
    const [addItemLayout, setAddItemLayout] = useState(false);
    const [itemDetailsLayout, setItemDetailsLayout] = useState(false);

    const setList = () => {
        setListLayout(false);
        setAddItemLayout(true);
    }

    const setAddItem = () => {
        setAddItemLayout(false);
        setItemDetailsLayout(true);
    }

    const setItemDetails = () => {
        setItemDetailsLayout(false);
        setListLayout(true);
    }

    const ListQuantity = () => {
        return(
            <div className="list">
                <div className="addItem mx-auto flex">
                    <div>
                        <img src={source} alt=""></img>
                    </div>
                    <div>
                        <p></p>
                        <button>add item</button>
                    </div>
                </div>
                    <div>

                    </div>
                <div>
                    <button onClick={() => setList()}>a</button>
                </div>
                
            </div>
        )
    }

    const AddItem = () => {
        return(
            <div>
            <button onClick={() => setAddItem()}>b</button>
        </div>
        )
    }

    const ItemDetails = () => {
        return(
            <div>
            <button onClick={() => setItemDetails()}>c</button>
        </div>
        )
    }

    return(
        <div>
            {listLayout ? <ListQuantity/> : null}
            {addItemLayout ? <AddItem/> : null}
            {itemDetailsLayout ? <ItemDetails/> : null}
        </div>
    )
}

export default List;