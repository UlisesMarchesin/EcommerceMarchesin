import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import CartContext from "../Context/CartContext";

const CartItemList = () => {
  const cartContext = useContext(CartContext);

  const { itemsCart, clearCart, totalPrice } = cartContext;

  const twStyles = {
    buttonClear:
      "mt-8 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded",
    buttonBack:
      "mt-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
    buttonForm:
      "mt-8 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded",
  };

  return (
    <section className="">
      {itemsCart.length ? (
        <div>
          {itemsCart.map((p) => (
            <CartItem key={p.id} prod={p}></CartItem>
          ))}
          <div className="text-right mr-64">
            <h3>Precio total: ${totalPrice}</h3>
            <button onClick={clearCart} className={twStyles.buttonClear}>
              Vaciar carrito
            </button>
            <Link to={"/form"}>
              <button className={twStyles.buttonForm}>Finalizar compra</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10">
          <h3>No tienes productos en el carrito</h3>
          <Link to={"/"}>
            <button className={twStyles.buttonBack}>Volver al inicio</button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default CartItemList;
