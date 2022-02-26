import React, { useEffect, useState } from 'react'
import Item from './Item'
import img1 from "../img/buzo01.jpg";
import img2 from "../img/buzo02.jpg";
import img3 from "../img/buzo03.jpg";

const productsList = [
  { id: 1, name: "Buzo algodon", color: "negro", stock: 21, price: 1550, category: "buzo", img: img1 },
  { id: 2, name: "Buzo algodon", color: "blanco", stock: 9, price: 1700, category: "buzo", img: img2 },
  { id: 3, name: "Buzo algodon", color: "negro", stock: 16, price: 1600, category: "buzo", img: img3 },
];

const ItemList = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const getProductsPromise = new Promise((response, reject) => {
      setTimeout(() => {
        response(productsList);
      }, 2000);
    });

    getProductsPromise.then((data) => {
      setProducts(data)
    });
  };

  return (
    <div className="columns-3">
      {products.map((p) => (
        <Item key={p.id} prod={p}></Item>
      ))}
    </div>
  );
}

export default ItemList