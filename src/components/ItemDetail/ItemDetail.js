import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) => {

  let stock = product.stock;

  const { addItem, clearCart, removeItem, getItemInCart } = useContext(CartContext);

  const [ isInCart, setIsInCart ] = useState(false)

  const addToCart = (qty) => {
    addItem(product, qty)
    setIsInCart(true)
  }

  let itemInCart = getItemInCart(product.id);
  if(itemInCart){
    stock = product.stock - itemInCart.qty;
  }

  const twStyles = {
    button:
      "mt-8 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded",
    buttonRemove:
      "mt-8 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded ml-5",
    buttonClear:
      "mt-8 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded",
  };

  return (
    <article className="flex justify-center m-8">
      <img className="p-4 mr-6" src={product.img}></img>
      <div className="max-w-sm border-solid border-2 border-gray-100 p-8">
        <h1 className="text-2xl">{product.titleDesc}</h1>
        <p className="mt-4">{product.description}</p>
        <p className="mt-4 text-4xl">${product.price}</p>
        {isInCart ? (
          <Link to="/cart">
            <button className={twStyles.button}>
              Terminar mi compra
            </button>
          </Link>
        ) : (
          <ItemCount addToCart={addToCart} stock={stock} />
        )}
        <div>
          <button onClick={clearCart} className={twStyles.buttonClear}>
            Vaciar carrito
          </button>
          <button
            onClick={() => removeItem(product)}
            className={twStyles.buttonRemove}
          >
            Eliminar producto
          </button>
        </div>
      </div>
    </article>
  );
}

export default ItemDetail