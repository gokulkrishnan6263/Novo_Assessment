import React from "react";
import { ChevronRight } from "react-bootstrap-icons";

export default function ProfileCard({ icon, title, subtitle, link }) {
  return (
    <div className="col-md-3 col-sm-6">
      <div
        className="card shadow-sm border-0 p-3 h-100 d-flex flex-column justify-content-between"
        style={{ backgroundColor: "#f2faf5", borderRadius: "12px" }}
      >
        <div>
          <div className="mb-3 fs-2 text-success">{icon}</div>
          <h6 className="fw-bold text-success">{title}</h6>
          <p className="text-muted small mb-0">{subtitle}</p>
        </div>
        <div className="text-end mt-2">
          <a href={link} className="text-success">
            <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
