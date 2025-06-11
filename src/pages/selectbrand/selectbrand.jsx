import React from 'react';
import { useNavigate } from 'react-router-dom';
import './selectbrand.css';

const SelectBrand = () => {
  const navigate = useNavigate();

  const handleSelect = () => {
    navigate('/overview');
  };

  return (
    <div className="container-fluid p-0">
      <div className="image-section">
        {/* First Column */}
        <div className="column clickable" onClick={handleSelect} tabIndex={0} role="button" aria-label="Select Burger King">
          <img src="/burgerkinglogo.png" alt="Burger King Logo" className="logo" />
          <img src="/burger.png" alt="Burger King Burger" className="burger1" />
        </div>
        {/* Second Column */}
        <div className="column clickable" onClick={handleSelect} tabIndex={0} role="button" aria-label="Select Popeyes">
          <img src="/image.png" alt="Popeyes Logo" className="logo1" />
          <img src="/popeye.png" alt="Popeyes Burger" className="burger" />
        </div>
      </div>
    </div>
  );
};

export default SelectBrand; 