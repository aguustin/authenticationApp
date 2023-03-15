import './App.css';
import DetailsEdit from './components/detailsEdit/detailsEdit';
import LoginRegister from './components/loginRegister/loginRegister';
import Navigation from './components/navigation/navigation';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<LoginRegister/>}></Route>
          <Route path="/details" element={<DetailsEdit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
