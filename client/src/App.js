import './App.css';
import DetailsEdit from './components/users/detailsEdit/detailsEdit';
import LoginRegister from './components/users/loginRegister/loginRegister';
import SignOut from './components/users/signOut/signOut';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './userContext/userContex';
import { ShoppingifyContextProvider } from './shoppingifyContext/shoppingifyContext';
import AllProducts from './components/shoppingify/allProducts/allProducts';


function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
      <UserContextProvider>
        <ShoppingifyContextProvider>
        <Routes>
          <Route path="/" element={<LoginRegister/>}></Route>
          <Route path="/details" element={<DetailsEdit/>}></Route>
          <Route path="/signOut" element={<SignOut/>}></Route>
          <Route path="/products" element={<AllProducts/>}></Route> 
        </Routes>
        </ShoppingifyContextProvider>
      </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
