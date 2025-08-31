import React from "react";

export default function ServiceCard({ icon, title }) {
  return (
    <div className="text-center mx-3">
      <div
        className="d-flex align-items-center justify-content-center mb-2"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "12px",
          backgroundColor: "#f9fdfb",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        }}
      >
        <div className="fs-3 text-success">{icon}</div>
      </div>
      <p className="small fw-medium text-muted">{title}</p>
    </div>
  );
}
