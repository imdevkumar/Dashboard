import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="d-flex align-items-center justify-content-between bg-light"
      style={{
        borderBottom: "2px solid black",
        padding: "28px 32px",
      }}
    >
      {/* Left Logo with Home Link */}
      <Link to="/">
        <img
          src="/logo-1.jpeg"
          alt="Logo 1"
          style={{ height: "30px", width: "auto" }}
        />
      </Link>

      {/* Center Navigation Links */}
      <nav className="flex-grow-1 d-flex justify-content-center">
        <Link
          to="/snapshot"
          className="mx-4 text-dark text-decoration-none fw-semibold"
        >
          Snapshot
        </Link>
        <Link
          to="/evolution"
          className="mx-4 text-dark text-decoration-none fw-semibold"
        >
          Evolution
        </Link>
        <Link
          to="/compare"
          className="mx-4 text-dark text-decoration-none fw-semibold"
        >
          Compare
        </Link>
      </nav>

      {/* Right Logo + User Icon with Home Link on Logo */}
      <div className="d-flex align-items-center gap-3">
        <Link to="/">
          <img
            src="/logo-2.jpeg"
            alt="Logo 2"
            style={{ height: "30px", width: "auto" }}
          />
        </Link>
        <i className="fas fa-user-circle fa-xl text-dark"></i>
      </div>
    </header>
  );
};

export default Header;
