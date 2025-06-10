import React from 'react';

const ProductMetrics = () => {
  return (
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total Products</h5>
            <h2 className="card-text">156</h2>
            <p className="text-muted">Active products</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Top Seller</h5>
            <h2 className="card-text">Product X</h2>
            <p className="text-muted">Best performing product</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Stock Level</h5>
            <h2 className="card-text">85%</h2>
            <p className="text-muted">Average stock level</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMetrics; 