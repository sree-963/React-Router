import React from 'react'
import products from '../Data/Data'
import '../App.css'
import { Link } from 'react-router-dom';

const Products = () => {

  return (

    <div className='products-container'>

      <h1>Products</h1>

      <div className="grid">

        {

          products.map((product) => {

            const { id, title, price, description } = product;

            return (

              <div className='product-card' key={id}>

                <h4>{title}</h4>

                <p> Price: ₹ {price.toLocaleString('en-IN')}.00 </p>

                <p className="product-description">  {description.slice(0, 25)}... </p>

                <Link to={`/products/${id}`}> View Details </Link>

              </div>
            );

          })

        }

      </div>

    </div>
  )
}

export default Products;
