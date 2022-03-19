import React, { useContext } from 'react'
import CartContext from "../Context/CartContext";

const CartItem = ({ prod: p }) => {

    const cartContext = useContext(CartContext);

    const { removeItem } = cartContext;

    const twStyles = {
        buttonRemove:
            "mt-8 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded ml-5",
    };
    
  return (
    <div className="m-4 border-solid border-b-2 border-gray-100 p-4">
      <div className="flex justify-evenly items-center my-2">
        <img src={p.img} alt="imagen" className="w-20 h-20 object-cover"></img>
        <h3 className="text-2xl">{p.name}</h3>
        <p>Cantidad: {p.qty}</p>
        <p>${p.price}</p>
        <div>
          <button
            onClick={() => removeItem(p, p.qty)}
            className={twStyles.buttonRemove}
          >
            Eliminar producto
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem