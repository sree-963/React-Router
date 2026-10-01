import React from 'react'

import { useParams, Link } from 'react-router-dom'
import menProducts from '../Data/Men'
const MenDetail = () => {
    const { id } = useParams()

    const menData = menProducts.find((item) => item.id === Number(id))
    return (
        <div className='MenDetail-container'>
            <h1>Men's Product Detail</h1>

            {
                menData ? (

                    <>
                        <div className='MenDetail-card'>

                            <h4>{menData.title}</h4>

                            <span>{menData.category} </span>
                            <p>{menData.description}</p>

                            <p> {menData.color}</p>
                            <p>Sizes: {menData.sizes.join(", ")}</p>
                            <p> Price: ₹ {menData.price.toLocaleString('en-IN')}.00 </p>
                            <p> Rating: {menData.rating} </p>


                        </div>

                    </>

                ) :

                    (
                        <div className="not-found">
                            <h2>Product Not Found</h2>

                            <p>
                                Sorry, the product you're looking for doesn't exist.
                            </p>

                            <Link to="/products" className="back-btn">
                                Back to Products
                            </Link>
                        </div>

                    )
            }

        </div>
    )
}

export default MenDetail
