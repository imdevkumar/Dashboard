import React from 'react';

const OverviewMetrics = () => {
  return (
    <div className="row">
      <div className="col-md-3 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total Users</h5>
            <h2 className="card-text">2.5K</h2>
            <p className="text-muted">Active users this month</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Revenue</h5>
            <h2 className="card-text">$45.2K</h2>
            <p className="text-muted">Monthly revenue</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Conversion</h5>
            <h2 className="card-text">3.2%</h2>
            <p className="text-muted">Conversion rate</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Growth</h5>
            <h2 className="card-text">+12.5%</h2>
            <p className="text-muted">Month over month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewMetrics; 