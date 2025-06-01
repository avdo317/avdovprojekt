import React from "react"
import { useParams } from "react-router-dom"
import { jela } from './MeniData.jsx'
const MeniDetails = () => {
  const { id } = useParams();
  const product = jela.find(item => item.id === Number(id));
  if (!product) {
    return <p>nema</p>;
  }
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Opis: {product.description}</p>
      <p>Cena: {product.price}$</p>
    </div>
  );
}

export default MeniDetails
