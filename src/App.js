import NavBar from "./components/header/navbar/index.js";
import './App.scss';
import AboutUs from "./components/pages/aboutUs";
import Contact from "./components/pages/contact";
import Home from "./components/pages/home";
import ItemDetailList from "./components/productList/itemDetailList/index"
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
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<AboutUs/>} />
          <Route path="/Contact" element={<Contact/>} />
          
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
        </header>
      </div>
    </div>
  );
}

export default App;
