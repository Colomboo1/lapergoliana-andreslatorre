import NavBar from "./components/header/navbar/index.js";
import './App.scss';
import ItemList from "./components/productList/itemList/index.js";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="App-header">
          <NavBar/>
        </header>
        <article>
          <ItemList/>
        </article> 

      </div>
    </div>
  );
}

export default App;
