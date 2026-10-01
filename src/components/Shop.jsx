import React from "react";
import { Link, Outlet } from "react-router-dom";


const Shop = () => {
  return (
    <div className="shop-container">

      <div className="shop-header">
        <h1>Shop</h1>
        <p>Explore our collection</p>
      </div>

      <div className="shop-categories">

        <Link
          to="men"
          className="category-link"
        >
          Men
        </Link>

        <Link
          to="women"
          className="category-link"
        >
          Women
        </Link>

      </div>

      <div className="shop-content">
        <Outlet />
      </div>

    </div>
  );
};

export default Shop;