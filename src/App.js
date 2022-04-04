import './App.scss';
import NavBar from "./components/header/NavBar.js";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import SizeClothes from './pages/SizeClothes';
import BuyCart from './pages/BuyCart';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="App-header">
          <BrowserRouter>
            <div className="navbar">
              <NavBar/>
            </div>
            <Routes>
              <Route path="/About" element={<AboutUs/>} />
              <Route path="/BuyCart" element={<BuyCart/>} />
              <Route path="/Contact" element={<Contact/>} />
              <Route path="/" element={<Home/>} />
              <Route path="/product/:id" element={<ProductDetail/>} />
              <Route path="/Products" element={<Products/>} />
              <Route path="/Size" element={<SizeClothes/>} />
              <Route path="*" element={<h1>Error 404</h1>} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </div>
  );
}

export default App;
