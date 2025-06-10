import React from 'react';
import OverviewMetrics from './Components/OverviewMetrics';

const Overview = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1>Overview</h1>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Welcome to the Dashboard</h5>
              <p className="card-text">This is the overview page of your dashboard.</p>
            </div>
          </div>
          <OverviewMetrics />
        </div>
      </div>
    </div>
  );
};

export default Overview; 