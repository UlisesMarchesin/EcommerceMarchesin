import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

  const {category} = useParams();

  return (
    <div className="mx-72 p-14">
      <ItemList category={category}></ItemList>
    </div>
  );
}

export default ItemListContainer;