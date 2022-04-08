import React, { useContext, useState } from 'react'

import db from "../../firebase/firebaseConfig";
import { collection, addDoc } from 'firebase/firestore';
import CartContext from '../Context/CartContext';

const Form = () => {

  const cartContext = useContext(CartContext);

  const { itemsCart } = cartContext;

  const initialValue = {
    nombre: '',
    apellido: '',
    email: '',
    ciudad: '',
    direccion: '',
    cp: ''
  }

  const [order, setOrder] = useState(initialValue);

  const captureInputs = (e) => {
    const {name, value} = e.target;
    setOrder({...order, [name]:value, itemsCart})
    console.log(order);
  }

  const saveData = async(e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'pedidos'),{
        ...order
      })
    } catch (error) {
      console.log(error);
    }
    setOrder({...initialValue})
  }

  const twStyles = {
    button:
      "mt-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
  };

  return (
    <>
      <form
        onSubmit={saveData}
        className="w-full max-w-lg p-5 border-solid border-2 border-gray-100"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Nombre"
              name="nombre"
              onChange={captureInputs}
              value={order.nombre}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Apellido"
              name="apellido"
              onChange={captureInputs}
              value={order.apellido}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full  px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="E-mail"
              name="email"
              onChange={captureInputs}
              value={order.email}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Ciudad"
              name="ciudad"
              onChange={captureInputs}
              value={order.ciudad}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="Dirección"
              name="direccion"
              onChange={captureInputs}
              value={order.direccion}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="Código postal"
              name="cp"
              onChange={captureInputs}
              value={order.cp}
            />
          </div>
        </div>
        <div className='text-center'>
          <button className={twStyles.button}>Confirmar pedido</button>
        </div>
      </form>
    </>
  );
}

export default Form