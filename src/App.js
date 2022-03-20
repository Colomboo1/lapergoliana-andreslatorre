import NavBar from "./components/header/navbar/index.js"
import ProductList from "./components/productList/card/index.js";
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="App-header">
          <NavBar/>
        </header>
        
        <article>
          <ProductList/>
          <ProductList/>
          <ProductList/>
          <ProductList/> 
        </article> 

      </div>
    </div>
  );
}

export default App;
