import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className="not-found-page">

      <div className="not-found-content">

        <div className="error-number">
          404
        </div>

        <h1>Page Not Found</h1>

        <p>
          Sorry, the page you're looking for doesn't exist
          or may have been moved.
        </p>

        <Link to="/" className="home-btn">
          Back to Home
        </Link>

      </div>

    </div>
  );
};

export default NotFound;