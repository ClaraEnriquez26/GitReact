import { useState } from "react";
import Navbar2 from './components/Navbar2';
import ItemListContainer from './components/ItemListContainer';
import { FaLeaf } from "react-icons/fa";

const Cart = ({ cartItems = [] }) => {
  console.info('Cart updated:', cartItems)
  return (
  <div className="App">
    <h1>Bienvenidos a</h1>
    <h2><FaLeaf />VeganShop</h2>
    {cartItems.length > 0 && (cartItems.map(cartItem => (<div>
      {cartItem.product.title + " x " + cartItem.qty}
    </div>)))
    }
    <hr />
  </div>
)}

function App() {
  // [{ producto, qty },
  const [cart, updateCart] = useState([])

  const addToCart = ({product, qty}) => {
    const newCartItem = { product, qty };
    const cartItem = cart.find(x => x.product.id === product.id)

    // retorna antes y la ejecucion de la funcioncion termina en el bloque del if: early return
    if(!cartItem) {
      return updateCart([...cart, newCartItem])
    } 

    cartItem.qty = qty;
    const cartWithItem = cart.filter(x => x.id === product.id)
    updateCart([...cartWithItem, cartItem])
  }

  return (
    <>
      <Navbar2 />
      <Cart cartItems={cart} />
      <ItemListContainer addToCart={addToCart} />
    </>
  );
}

export default App;