import './navegationShopping.css';
import logo from '../../imgs/logo.svg';
import menu from '../../imgs/menu.png';
import undoButton from '../../imgs/undo-button.png';
import profit from '../../imgs/profit.png';
import shoppingCart from '../../imgs/shopping-cart.png';

const NavegationShopping = () => {
    return(
        <div className='navegationShopping'>
            <nav className='nav'>
                <div className="logo">
                    <img src={logo} alt=""></img>
                </div>
                <div className='nav-buttons'>
                    <button><img src={menu} alt=""></img></button>
                    <button><img src={undoButton} alt=""></img></button>
                    <button><img src={profit} alt=""></img></button>
                </div>
                <div className='cart-icon'>
                    <img src={shoppingCart} alt=""></img>
                </div>
            </nav>
        </div>
    )
}

export default NavegationShopping;
