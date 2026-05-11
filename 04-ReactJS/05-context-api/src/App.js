import "./App.css";
import Cart from "./components/Cart";
import Item from "./components/Item";

function App() {

  return (
    <div className="App">
      <Item name = "Apple" price = {34} />
      <Item name = "City Safari" price = {90} />
      <Item name = "Bus" price = {500} />
      <Item name = "Aeroplane" price = {129840} />
      <Cart />
    </div>
  );
}

export default App;
