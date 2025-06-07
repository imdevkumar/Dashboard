import React, { useState } from "react";

const SidebarLeft = ({ toggleRightSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? "" : name);
  };

  return (
    <div style={{ width: "250px", background: "#fff", padding: "1rem" }}>
  

      {["Period", "Country", "Brand"].map((item) => (
        <div key={item} className="mb-2">
          <button
            className="btn btn-outline-dark w-100 text-start"
            onClick={() => toggleDropdown(item)}
          >
            {item}
          </button>
          {openDropdown === item && (
            <div className="mt-1 ps-2">
              {["Option 1", "Option 2", "Option 3"].map((option) => (
                <div key={option} className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`${item}-${option}`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`${item}-${option}`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Toggle Right Sidebar Button */}
      <button onClick={toggleRightSidebar} className="btn btn-dark mt-4">
        ← Toggle Right Sidebar
      </button>
    </div>
  );
};

export default SidebarLeft;
