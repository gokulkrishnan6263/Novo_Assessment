import React from "react";
import { useNavigate } from "react-router-dom";

const qrCodes = [
  { id: "Q201946579", terminal: "Terminal 1" },
  { id: "Q201946580", terminal: "Terminal 2" },
  { id: "Q201946581", terminal: "Terminal 3" },
];

export default function QRList1() {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-sm p-4 rounded">
      <div className="d-flex mb-3">
        <button className="btn btn-success btn-sm me-2">Active QR Codes</button>

        
        <button
          className="btn btn-outline-success btn-sm"
          onClick={() => navigate("/QRRequest")}
        >
          QR Code Requests
        </button>
      </div>

      <ul className="list-group">
        {qrCodes.slice(0, 5).map((qr, index) => (
          <li
            key={index}
            className="list-group-item d-flex align-items-center border-0"
          >
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?data=${qr.id}&size=40x40`}
              className="me-3"
              alt="qr"
            />
            <div>
              <small className="fw-bold">{qr.id}</small>
              <br />
              <span className="text-muted small">
                All Marketing Sales - MS19030415533164980231
              </span>
              <br />
              <span className="small">{qr.terminal}</span>
            </div>
          </li>
        ))}
      </ul>

      <button className="btn btn-success w-100 mt-5">Request more QR Codes</button>
    </div>
  );
}
