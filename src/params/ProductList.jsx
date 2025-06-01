import { Link } from "react-router-dom"
import { products } from "./data"

const ProductList = () => {
  return (
    <div>
      <h2>Lista proizvoda</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`//${product.id}`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div >
  )
}

export default ProductList
