import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../Data/Data";
// import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="product-detail-container">

      {product ? (
        <div className="product-detail-card">

          <div className="product-detail-content">

            <span className="product-id">
              Product #{product.id}
            </span>

            <h1>{product.title}</h1>

            <p className="product-detail-description">
              {product.description}
            </p>

            <p className="product-detail-price">
              ₹ {product.price.toLocaleString("en-IN")}
            </p>

            <div className="product-actions">
              <button className="buy-btn">
                Buy Now
              </button>

              <Link to="/products" className="back-btn">
                Back to Products
              </Link>
            </div>

          </div>

        </div>
      ) : (
        <div className="not-found">
          <h2>Product Not Found</h2>

          <p>
            Sorry, the product you're looking for doesn't exist.
          </p>

          <Link to="/products" className="back-btn">
            Back to Products
          </Link>
        </div>
      )}

    </div>
  );
};

export default ProductDetail;