import React from 'react';

const VisitationMetrics = () => {
  return (
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total Visits</h5>
            <h2 className="card-text">12.5K</h2>
            <p className="text-muted">This month</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Avg. Duration</h5>
            <h2 className="card-text">4m 32s</h2>
            <p className="text-muted">Per visit</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Bounce Rate</h5>
            <h2 className="card-text">32%</h2>
            <p className="text-muted">Single page visits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitationMetrics; 