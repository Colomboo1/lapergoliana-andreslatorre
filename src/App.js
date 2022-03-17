import NavBar from "./components/header/navbar/index.js"
import Cart from "./components/header/cart/index.js";
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Cart/>
        
      </header>
    </div>
  );
}

export default App;
