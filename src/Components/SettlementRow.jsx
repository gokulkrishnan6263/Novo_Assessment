import React from "react";

export default function SettlementRow({ label, value }) {
  return (
    <div className="row mb-3">
      <div className="col-6 text-muted small">{label}</div>
      <div className="col-6 fw-semibold text-end">{value}</div>
    </div>
  );
}
