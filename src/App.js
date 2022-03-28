import NavBar from "./components/header/navbar/index.js";
import ProductList from "./components/productList/card/index.js";
import './App.scss';
import ProductsListArray from "./components/productList/itemListContainer/itemList/index.js";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="App-header">
          <NavBar/>
        </header>
        
        <article>
          <ProductList/>
        </article> 

      </div>
    </div>
  );
}

export default App;
