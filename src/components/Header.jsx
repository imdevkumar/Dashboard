import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="d-flex align-items-center justify-content-between bg-white"
      style={{
        borderBottom: "2px solid black",
        padding: "20px 32px",
      }}
    >
      {/* Left: Logo  */}
      <div className="d-flex align-items-center gap-3">
        <Link to="/">
          <img
            src="/image 2.png"
            alt="Logo 1"
            style={{ height: "30px", width: "auto" }}
          />
        </Link>

      </div>

      {/* Center: Navigation Links */}
      <nav className="d-flex justify-content-center flex-grow-1">
        <div className="d-flex gap-4">

          <Link
            to="/snapshot"
            className="text-decoration-none d-flex align-items-center"
            style={{ color: "lightgreen", fontSize: "1rem" }}
          >
            <i className="fas fa-home me-2"></i> Overview
          </Link>

          <Link
            to="/evolution"
            className="text-dark text-decoration-none fw-semibold"
          >
            Saliency
          </Link>
          <Link
            to="/compare"
            className="text-dark text-decoration-none fw-semibold"
          >
            Consideration
          </Link>
          <Link
            to="/compare"
            className="text-dark text-decoration-none fw-semibold"
          >
            Usage habits
          </Link>
          <Link
            to="/compare"
            className="text-dark text-decoration-none fw-semibold"
          >
            Product
          </Link>
          <Link
            to="/compare"
            className="text-dark text-decoration-none fw-semibold"
          >
            Communication
          </Link>
          <Link
            to="/compare"
            className="text-dark text-decoration-none fw-semibold"
          >
            Profile
          </Link>
        </div>
      </nav>

      {/* Right: Logo */}
      <div className="d-flex align-items-center">
        <Link to="/">
          <img
            src="/image 3.png"
            alt="Logo 2"
            style={{ height: "30px", width: "auto" }}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
