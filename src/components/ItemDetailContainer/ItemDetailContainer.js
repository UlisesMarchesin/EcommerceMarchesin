import React, { useEffect, useState } from 'react'
import { getProductsById } from '../../helpers/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ( {id} ) => {

    const [product, setProduct] = useState(null);

    useEffect(() => {

      getProductsById(id, setProduct);
    }, []);

  return (
    <div>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <div className="flex justify-center items-center mt-20">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          ></div>
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer