import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SidebarWithDropdowns = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const [openDropdown, setOpenDropdown] = useState(""); // Tracks which dropdown is open

  const handleCheckboxChange = (value, selectedArray, setSelectedArray) => {
    if (selectedArray.includes(value)) {
      setSelectedArray(selectedArray.filter((item) => item !== value));
    } else {
      setSelectedArray([...selectedArray, value]);
    }
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? "" : name);
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <div className="p-3" style={{ width: "250px", color: "black", backgroundColor: "white" }}>
        {/* Logo */}
        <div className="d-flex align-items-center mb-4">
          <img src="logo.png" alt="Logo" className="me-2" />
        </div>

        {/* Period */}
        <div className="mb-3">
          <h6>Period</h6>
          <button
            className="btn btn-outline-dark btn-sm w-100 text-start"
            onClick={() => toggleDropdown("period")}
          >
            {selectedPeriod || "Select Period"}
          </button>
          {openDropdown === "period" && (
            <div className="mt-2 ps-2">
              {["May-2023", "Jun-2023", "Jul-2023", "Aug-2023", "Sep-2023", "Oct-2023"].map((item) => (
                <div className="form-check" key={item}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="period"
                    id={`period-${item}`}
                    checked={selectedPeriod === item}
                    onChange={() => setSelectedPeriod(item)}
                  />
                  <label className="form-check-label" htmlFor={`period-${item}`}>
                    {item}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Country */}
        <div className="mb-3">
          <h6>Country</h6>
          <button
            className="btn btn-outline-dark btn-sm w-100 text-start"
            onClick={() => toggleDropdown("country")}
          >
            {selectedCountries.length > 0 ? selectedCountries.join(", ") : "Select Country"}
          </button>
          {openDropdown === "country" && (
            <div className="mt-2 ps-2">
              {["India", "USA", "UK", "Germany"].map((item) => (
                <div className="form-check" key={item}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`country-${item}`}
                    checked={selectedCountries.includes(item)}
                    onChange={() => handleCheckboxChange(item, selectedCountries, setSelectedCountries)}
                  />
                  <label className="form-check-label" htmlFor={`country-${item}`}>
                    {item}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Brand */}
        <div className="mb-3">
          <h6>Brand</h6>
          <button
            className="btn btn-outline-dark btn-sm w-100 text-start"
            onClick={() => toggleDropdown("brand")}
          >
            {selectedBrands.length > 0 ? selectedBrands.join(", ") : "Select Brand"}
          </button>
          {openDropdown === "brand" && (
            <div className="mt-2 ps-2">
              {["Nike", "Adidas", "Puma", "Reebok"].map((item) => (
                <div className="form-check" key={item}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`brand-${item}`}
                    checked={selectedBrands.includes(item)}
                    onChange={() => handleCheckboxChange(item, selectedBrands, setSelectedBrands)}
                  />
                  <label className="form-check-label" htmlFor={`brand-${item}`}>
                    {item}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarWithDropdowns;
