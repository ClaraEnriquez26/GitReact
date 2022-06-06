import ItemList from './ItemList';
import { useEffect, useState } from "react";
import fetchProducts from "../utils/Fetch"

const ItemListContainer = ({ greetings = "Podes encontrarnos en Yrigoyen y Alsina", addToCart }) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(result => {
        setDatos(result)
      })
      .catch(err => console.log(err))
  }, []);

  const onAdd = (id, qty) => {
    const product = datos.find(x => id === x.id)
    console.info("Agregaste: " + product.title + " x " + qty + " items al carrito");
    addToCart({product, qty})
  }

  return (
    <div>
      <h4>{greetings}</h4>
      <ItemList items={datos} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer;