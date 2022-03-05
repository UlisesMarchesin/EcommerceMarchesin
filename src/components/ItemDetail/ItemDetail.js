import React from 'react'

const ItemDetail = ({product}) => {

  const buyProduct = () => {
    console.log('Producto comprado');
  }

  return (
    <article className="flex justify-center m-8">
      <img className="p-4 mr-6" src={product.img}></img>
      <div className="max-w-sm border-solid border-2 border-gray-100 p-8">
        <h1 className="text-2xl">{product.titleDesc}</h1>
        <p className="mt-4">{product.description}</p>
        <p className="mt-4 text-4xl">${product.price}</p>
        <button
          onClick={buyProduct}
          className="mt-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Comprar
        </button>
      </div>
    </article>
  );
}

export default ItemDetail