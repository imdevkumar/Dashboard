import React from 'react';
import VisitationMetrics from './Components/VisitationMetrics';

const Visitation = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1>Visitation</h1>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Visitor Analytics</h5>
              <p className="card-text">Monitor and analyze visitor behavior and patterns.</p>
            </div>
          </div>
          <VisitationMetrics />
        </div>
      </div>
    </div>
  );
};

export default Visitation; 