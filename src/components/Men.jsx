import React from 'react'
import menProducts from '../Data/Men'
import '../App.css'
import { Link } from 'react-router-dom';
const Men = () => {
    return (
        <div>

            <h1>Men's Products</h1>

            <div className="Men-products-container">

                {
                    menProducts.map((product) => (

                        <div className='Men-product-card' key={product.id}>

                            <h4>
                                {product.title}

                            </h4>
                            <span>{product.category} </span>
                            <p>{product.description.slice(0, 25)}...</p>

                            <p> Price: ₹ {product.price.toLocaleString('en-IN')}.00 </p>

                            <Link to={`/shop/men/${product.id}`}>View Details</Link>


                        </div>

                    ))
                }

            </div>

        </div>
    )
}

export default Men