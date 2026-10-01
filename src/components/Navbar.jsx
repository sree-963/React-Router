import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="logo">
          Shop<span>Ease</span>
        </NavLink>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>


           <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>


          <li>
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/shop" className="nav-link">
              Shop
            </NavLink>
          </li>
         
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>

        </ul>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
          />
          <button>🔍</button>
        </div>

        {/* Cart */}
        <NavLink to="/cart" className="cart">
          🛒
          <span className="cart-count">0</span>
        </NavLink>

        {/* Login */}
        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;