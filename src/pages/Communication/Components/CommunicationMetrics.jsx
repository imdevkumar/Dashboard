import React from 'react';

const CommunicationMetrics = () => {
  return (
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Messages Sent</h5>
            <h2 className="card-text">1.8K</h2>
            <p className="text-muted">This month</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Response Rate</h5>
            <h2 className="card-text">92%</h2>
            <p className="text-muted">Average response time</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Active Channels</h5>
            <h2 className="card-text">8</h2>
            <p className="text-muted">Communication channels</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationMetrics; 