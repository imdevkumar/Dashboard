import React from 'react';
import './AwarenessMatrix.css';

const AwarenessMatrix = () => {
  return (
    <div className="awareness-matrix-container"> 
      <div className="d-flex flex-wrap justify-content-between align-items-stretch">
        {/* Burger King Card */}
        <div className="awareness-card flex-fill">
          <div className="d-flex align-items-center mb-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Burger_King_logo.svg" alt="Burger King" className="brand-logo me-2" />
            <span className="brand-name">Burger King <span className="up-icon">▲</span></span>
            <span className="ms-auto percent-value">75%</span>
          </div>
          <div className="progress awareness-progress mb-1">
            <div className="progress-bar bg-success" style={{ width: '75%' }}></div>
            <div className="progress-bar bg-light" style={{ width: '25%' }}></div>
          </div>
          <div className="d-flex justify-content-between small-text">
            <span>Base: 1143</span>
            <span className="text-muted">72%</span>
          </div>
        </div>
        {/* KFC Card */}
        <div className="awareness-card flex-fill">
          <div className="d-flex align-items-center mb-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/KFC_logo.svg" alt="KFC" className="brand-logo me-2" />
            <span className="brand-name">KFC <span className="down-icon">▼</span></span>
            <span className="ms-auto percent-value">45%</span>
          </div>
          <div className="progress awareness-progress mb-1">
            <div className="progress-bar bg-secondary" style={{ width: '45%' }}></div>
            <div className="progress-bar bg-light" style={{ width: '55%' }}></div>
          </div>
          <div className="d-flex justify-content-between small-text">
            <span>Base: 1143</span>
            <span className="text-muted">67%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwarenessMatrix; 