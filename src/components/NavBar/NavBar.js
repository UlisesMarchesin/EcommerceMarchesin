import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import CartContext from "../Context/CartContext";

const NavBar = () => {

  const cartContext = useContext(CartContext);

  const { countCart } = cartContext;

  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm">
      <Link to="/">
        <h1 className="text-3xl pl-8">Marchecommerce</h1>
      </Link>
      <div className="flex pr-8 items-end">
        <Link to={`/categoria/buzos`}>
          <p className="pr-4">Buzos</p>
        </Link>
        <Link to={`/categoria/remeras`}>
          <p className="pr-4" href="#">Remeras</p>
        </Link>
        <a className="pr-4" href="#">Contacto</a>
        <a className="pr-4" href="#">Nosotros</a>
        {
          countCart != 0 ? 
          <Link to={'/cart'}>
            <CartWidget></CartWidget>
          </Link>
          :<div></div>
        }
      </div>
    </nav>
  )
}

export default NavBar