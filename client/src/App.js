import './App.css';
import DetailsEdit from './components/detailsEdit/detailsEdit';
import LoginRegister from './components/loginRegister/loginRegister';
import Navigation from './components/navigation/navigation';
import SignOut from './components/signOut/signOut';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './userContext/userContex';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <UserContextProvider>
        <Navigation/>
        <Routes>
          <Route path="/" element={<LoginRegister/>}></Route>
          <Route path="/details" element={<DetailsEdit/>}></Route>
          <Route path="/signOut" element={<SignOut/>}></Route> 
        </Routes>
      </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
