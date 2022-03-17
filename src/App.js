import NavBar from "./components/header/navbar/index.js"
import Cart from "./components/header/cart/index.js";
import ProductList from "./components/productList/index.js";
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Cart/>
      </header>
      
      <article>
        <ProductList/>
        <ProductList/>
        <ProductList/>
        <ProductList/> 
      </article>  
    </div>
  );
}

export default App;
