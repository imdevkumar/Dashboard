import React from "react";

const SidebarRight = () => {
  return (
    <div style={{ width: "250px", background: "#f8f9fa", padding: "1rem" }}>
      <h6>More Filters</h6>
      <div className="mb-3">
        <strong>Dropdown A</strong>
        <select className="form-select">
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <div>
        <strong>Dropdown B</strong>
        <select className="form-select">
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
    </div>
  );
};

export default SidebarRight;
