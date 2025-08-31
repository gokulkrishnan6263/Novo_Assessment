import React from "react";

export default function QRListCard({ code, name, terminal }) {
  return (
    <div className="card shadow-sm p-3 h-100">
      <div className="text-center">
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=demo"
          alt="QR Code"
          className="img-fluid mb-3"
        />
        <h6 className="fw-bold">{code}</h6>
        <p className="small text-muted mb-1">{name}</p>
        <p className="text-success">{terminal}</p>
        <button className="btn btn-success w-100">Download QR</button>
      </div>
    </div>
  );
}
