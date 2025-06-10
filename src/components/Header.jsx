import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userEmail = "user@example.com";

  const navLinks = [
    { path: "/", label: "Overview", icon: "home" },
    { path: "/awareness", label: "Awareness" },
    { path: "/consideration", label: "Consideration" },
    { path: "/visitation", label: "Visitation" },
    { path: "/product", label: "Product" },
    { path: "/communication", label: "Communication" }
  ];

  return (
    <header
      className="d-flex align-items-center justify-content-between bg-white"
      style={{
        borderBottom: "2px solid black",
        padding: "10px 15px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: "60px"
      }}
    >
      {/* Left: Logo */}
      <div className="d-flex align-items-center" style={{ width: '120px' }}>
        <Link to="/" className="d-flex align-items-center">
          <img
            src="/image 2.png"
            alt="Logo"
            style={{ height: "25px", width: "auto" }}
          />
        </Link>
      </div>

      {/* Center: Navigation Links - Hidden on mobile */}
      <nav className="d-none d-lg-flex justify-content-center flex-grow-1">
        <div className="d-flex gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-decoration-none d-flex align-items-center ${
                link.path === "/" ? "text-success" : "text-dark fw-semibold"
              }`}
            >
              {link.icon && <i className={`fas fa-${link.icon} me-2`}></i>}
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Right: User Profile and Mobile Menu */}
      <div className="d-flex align-items-center gap-3">
        {/* User Profile - Hidden on mobile */}
        <div className="d-none d-md-flex align-items-center position-relative">
          <div 
            className="d-flex align-items-center gap-2 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
            style={{ cursor: 'pointer' }}
          >
            <div className="user-avatar bg-primary rounded-circle d-flex align-items-center justify-content-center"
                 style={{ width: '35px', height: '35px', color: 'white' }}>
              <i className="fas fa-user"></i>
            </div>
            <span className="text-dark">{userEmail}</span>
            <i className={`fas fa-chevron-${showDropdown ? 'up' : 'down'} ms-2`}></i>
          </div>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="position-absolute top-100 end-0 mt-2 bg-white shadow-lg rounded"
                 style={{ minWidth: '200px', zIndex: 1000 }}>
              <div className="p-3">
                <div className="mb-2">
                  <i className="fas fa-user-circle me-2"></i>
                  Profile
                </div>
                <div className="mb-2">
                  <i className="fas fa-cog me-2"></i>
                  Settings
                </div>
                <div className="border-top pt-2">
                  <i className="fas fa-sign-out-alt me-2"></i>
                  Logout
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="d-lg-none btn btn-link text-dark p-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ fontSize: '1.25rem', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="d-lg-none position-fixed top-0 start-0 w-100 h-100 bg-white"
             style={{ 
               zIndex: 999, 
               paddingTop: '60px',
               animation: 'slideIn 0.3s ease'
             }}>
          <div className="p-2">
            {/* Mobile User Profile */}
            <div className="d-flex align-items-center gap-2 mb-3 p-2 border-bottom">
              <div className="user-avatar bg-primary rounded-circle d-flex align-items-center justify-content-center"
                   style={{ width: '35px', height: '35px', color: 'white' }}>
                <i className="fas fa-user"></i>
              </div>
              <span className="text-dark">{userEmail}</span>
            </div>

            {/* Mobile Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="d-block py-2 text-decoration-none text-dark border-bottom"
                onClick={() => setIsMenuOpen(false)}
                style={{ fontSize: '0.95rem' }}
              >
                {link.icon && <i className={`fas fa-${link.icon} me-2`}></i>}
                {link.label}
              </Link>
            ))}

            {/* Mobile Menu Footer */}
            <div className="mt-3 pt-2 border-top">
              <div className="d-flex flex-column gap-2">
                <button className="btn btn-outline-primary btn-sm">
                  <i className="fas fa-user-circle me-2"></i>
                  Profile
                </button>
                <button className="btn btn-outline-primary btn-sm">
                  <i className="fas fa-cog me-2"></i>
                  Settings
                </button>
                <button className="btn btn-outline-danger btn-sm">
                  <i className="fas fa-sign-out-alt me-2"></i>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;