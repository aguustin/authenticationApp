import { useState } from "react";
import './list.css';
import source from '../../imgs/source.svg';
import lapiz from '../../imgs/lapiz.png';
import AddNewItem from "../addNewItem/addNewItem";

const List = () => {

    const [listLayout, setListLayout] = useState(true);
    const [addItemLayout, setAddItemLayout] = useState(false);

    const setAddItem = () => {
        setListLayout(false);
        setAddItemLayout(true);
    }


     const ListQuantity = () => {
        return(
            <div className="list">
                <div className="addItem mx-auto flex">
                    <div>
                        <img src={source} alt=""></img>
                    </div>
                    <div className="dontFind">
                        <p>Don`t find what you need?</p>
                        <button onClick={() => setAddItem()}>add item</button> {/* abre la vista para agregar productos (en allProductsBody) */}
                    </div>
                </div>
                    <div className="itemsList mx-auto ">
                        <div className="flex space-x-52">
                            <p>Shopping List</p>
                            <img id="editar"  src={lapiz} alt=""></img>
                        </div>
                        <div className="categories_itemsQuantity text-left">
                            <label>Fruits and vegetables</label>               {/* datos de las categorias */}
                            <div className="text-left">                        {/* nombres de items y cantidad*/}
                                <ul className="flex space-x-52">
                                    <li><p>Chicken</p></li>
                                    <li><button>3 pcs</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <div>
                    <form className="form_enter_name_item flex">
                        <input type="text" name="enterNameItem" placeholder="Enter name"></input>
                        <button>Save</button>
                    </form>
                </div>
                
            </div>
        )
    }



    return(
        <div>
            {listLayout ? <ListQuantity/> : null}
            {addItemLayout ? <AddNewItem/> : null}
        </div>
    )
}

export default List;