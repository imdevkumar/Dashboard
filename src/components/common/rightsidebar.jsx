import React from "react";
import { FaChevronDown } from "react-icons/fa";
// import './RightSidebar.css';

const dropdowns = [
  { label: "Age Group", options: ["All", "18-24", "25-34", "35-44", "45+"] },
  { label: "Gender", options: ["All", "Male", "Female", "Other"] },
  { label: "Generation", options: ["All", "Gen Z", "Millennial", "Gen X", "Boomer"] },
  { label: "QSR HML", options: ["All", "High", "Medium", "Low"] },
  { label: "BK Usage", options: ["All", "Frequent", "Occasional", "Rare"] },
  { label: "McD HML", options: ["All", "High", "Medium", "Low"] },
  { label: "KFC HML", options: ["All", "High", "Medium", "Low"] },
  { label: "BK Consumer Profile", options: ["All", "Family", "Single", "Student", "Professional"] }
];

const RightSidebar = () => {
  return (
    <div 
      className="sidebar-right d-flex flex-column" 
      style={{ 
        width: '250px', 
        background: '#fff', 
        borderRadius: 16, 
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)', 
        height: 'calc(100vh - 223px)', 
        padding: '1rem',
        position: 'relative'
      }}
    >
      <h2 className="sidebar-title">Segment Filter</h2>
      <div style={{ flex: 1 }}>
        {dropdowns.map((dropdown, idx) => (
          <div className="dropdown-wrapper" key={idx}>
            <div className="dropdown-label-line">
              <span className="dropdown-label-text">{dropdown.label}</span>
            </div>
            <div className="dropdown-select-container">
              <select className="custom-select">
                {dropdown.options.map((option, oidx) => (
                  <option key={oidx}>{option}</option>
                ))}
              </select>
              <FaChevronDown className="dropdown-chevron" />
            </div>
          </div>
        ))}
      </div>
      <div className="sidebar-footer">
        <div className="d-flex flex-row gap-2">
          <button className="btn btn-dark flex-grow-1">Apply Filter</button>
          <button className="btn btn-outline-secondary">Reset Filter</button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
