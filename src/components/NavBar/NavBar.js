import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const navBar = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm">
      <Link to="/">
        <h1 className="text-3xl pl-8">Marchecommerce</h1>
      </Link>
      <div className="flex pr-8">
        <Link to={`/categoria/buzos`}>
          <p className="pr-4">Buzos</p>
        </Link>
        <Link to={`/categoria/remeras`}>
          <p className="pr-4" href="#">Remeras</p>
        </Link>
        <a className="pr-4" href="#">Contacto</a>
        <a className="pr-4" href="#">Nosotros</a>
        <CartWidget></CartWidget>
      </div>
    </nav>
  )
}

export default navBar