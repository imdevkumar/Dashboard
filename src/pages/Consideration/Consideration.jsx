import React from 'react';
import ConsiderationMetrics from './Components/ConsiderationMetrics';

const Consideration = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1>Consideration</h1>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Consideration Metrics</h5>
              <p className="card-text">Track and analyze user consideration metrics and engagement.</p>
            </div>
          </div>
          <ConsiderationMetrics />
        </div>
      </div>
    </div>
  );
};

export default Consideration; 