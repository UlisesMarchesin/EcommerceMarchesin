import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Item = ({ prod: p }) => {

  return (
    <Link to={`/product/${ p.id }`}>
      <div className="text-center hover:shadow-2xl cursor-pointer border-solid border-2 border-gray-100 p-4">
        <h3 className="text-2xl">{p.name}</h3>
        <img src={p.img} alt="imagen" className="w-80 h-96 object-cover"></img>
        <div className="flex justify-around my-2">
          <p>Stock: {p.stock}</p>
          <p>${p.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default Item