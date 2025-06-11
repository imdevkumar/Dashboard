import React from "react";
import { 
  FaUser,  FaChevronDown 
} from "react-icons/fa";

const dropdowns = [
  {
    label: "Age Group",
    
    options: ["All", "18-24", "25-34", "35-44", "45+"]
  },
  {
    label: "Gender",
    
    options: ["All", "Male", "Female", "Other"]
  },
  {
    label: "Generation",
    
    options: ["All", "Gen Z", "Millennial", "Gen X", "Boomer"]
  },
  {
    label: "QSR HML",
   
    options: ["All", "High", "Medium", "Low"]
  },
  {
    label: "BK Usage",
    
    options: ["All", "Frequent", "Occasional", "Rare"]
  },
  {
    label: "McD HML",
   
    options: ["All", "High", "Medium", "Low"]
  },
  {
    label: "KFC HML",

    options: ["All", "High", "Medium", "Low"]
  },
  {
    label: "BK Consumer Profile",
    
    options: ["All", "Family", "Single", "Student", "Professional"]
  }
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
      <h2 
        style={{ 
          fontSize: '1rem', 
          fontWeight: 600, 
          marginBottom: '1.5rem',
          color: '#222'
        }}
      >
        Segment Filter
      </h2>
      <div style={{ flex: 1 }}>
        {dropdowns.map((dropdown, idx) => (
          <div key={idx} style={{ marginBottom: '18px' }}>
            <label 
              style={{ 
                fontWeight: 500, 
                fontSize: '12px',
                marginBottom: 4, 
                display: 'flex', 
                alignItems: 'center' 
              }}
            >
              {dropdown.icon}{dropdown.label}
            </label>
            <div style={{ position: 'relative' }}>
              <select 
                className="form-select" 
                style={{ 
                  border: '1.5px solid #222', 
                  borderRadius: 8, 
                  fontWeight: 500, 
                  fontSize: '12px',
                  padding: '6px 32px 6px 12px', 
                  width: '100%', 
                  appearance: 'none', 
                  background: '#fff', 
                  color: '#222'
                }}
              >
                {dropdown.options.map((option, oidx) => (
                  <option key={oidx}>{option}</option>
                ))}
              </select>
              <FaChevronDown 
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  color: '#222',
                  fontSize: '12px'
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div 
        style={{ 
          position: 'sticky', 
          bottom: 0, 
          background: '#fff', 
          paddingTop: '1rem',
          borderTop: '1px solid #eee'
        }}
      >
        <div className="d-flex flex-row gap-2">
          <button className="btn btn-dark flex-grow-1">
            Apply Filter
          </button>
          <button className="btn btn-outline-secondary">
            Reset Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
