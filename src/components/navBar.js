import React from "react";
import CartWidget from "./CartWidget";

const navBar = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm">
      <h1 className="text-3xl pl-8">Marchecommerce</h1>
      <div className="flex pr-8">
        <a className="pr-4" href="#">Inicio</a>
        <a className="pr-4" href="#">Contacto</a>
        <a className="pr-4" href="#">Nosotros</a>
        <CartWidget></CartWidget>
      </div>
    </nav>
  )
}

export default navBar