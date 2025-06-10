import React from 'react';

const ConsiderationMetrics = () => {
  return (
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Engagement Rate</h5>
            <h2 className="card-text">68%</h2>
            <p className="text-muted">User engagement</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Time to Consider</h5>
            <h2 className="card-text">2.5d</h2>
            <p className="text-muted">Average time</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Consideration Score</h5>
            <h2 className="card-text">8.5/10</h2>
            <p className="text-muted">Overall score</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsiderationMetrics; 