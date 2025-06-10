import React from 'react';
import CommunicationMetrics from './Components/CommunicationMetrics';

const Communication = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1>Communication</h1>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Communication Center</h5>
              <p className="card-text">Manage and monitor all communication channels and messages.</p>
            </div>
          </div>
          <CommunicationMetrics />
        </div>
      </div>
    </div>
  );
};

export default Communication; 