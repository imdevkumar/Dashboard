import React from 'react';

const SidebarRight = ({ onClose }) => (
  <div className="sidebar-right" style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', minHeight: 400, height: '100%' }}>
    <div className="sidebar-header d-flex justify-content-between align-items-center p-3 border-bottom">
      <h5 className="mb-0">Segment Panel</h5>
      <button className="btn btn-sm btn-outline-secondary" onClick={onClose}>&times;</button>
    </div>
    <div className="sidebar-content p-3">
      {/* Add your segment controls or content here */}
      <p>This is the right sidebar for segment controls.</p>
    </div>
  </div>
);

export default SidebarRight; 