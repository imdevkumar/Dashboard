import React from "react";

const CircleGraph = ({ label, percent }) => {
  return (
    <div className="border p-4 text-center">
      <h6>{label}</h6>
      <div
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: `conic-gradient(#0d6efd ${percent}%, #dee2e6 ${100 - percent}%)`,
          margin: "auto",
        }}
      />
    </div>
  );
};

export default CircleGraph;
