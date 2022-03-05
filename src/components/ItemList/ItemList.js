import React, { useEffect, useState } from 'react'
import { getProducts } from '../../helpers/getProducts';
import Item from '../Item/Item'



const ItemList = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <section className="flex flex-wrap justify-center gap-16">
      {products.length ? (
        products.map((p) => <Item key={p.id} prod={p}></Item>)
      ) : (
        <div className="flex justify-center items-center">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status">
          </div>
        </div>
      )}
    </section>
  );
}

export default ItemList