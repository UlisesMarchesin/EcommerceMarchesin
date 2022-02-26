import React, { useEffect } from 'react'

const Item = ({prod: p}) => {

  return (
    <div>
      <h3 className="text-2xl">{p.name}</h3>
      <p>Stock: {p.stock}</p>
      <p>${p.price}</p>
      <img src={p.img} alt="imagen" className="w-80"></img>
    </div>
  );
}

export default Item