import React from "react";

export default function QRList2() {
  const qrItems = [
    {
      id: 1,
      title: "All Marketing Sales",
      address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.",
      date: "26.04.202",
    },
    {
      id: 2,
      title: "All Marketing Sales",
      address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.",
      date: "26.04.202",
    },
  ];

  return (
    <div className="bg-white shadow-sm p-4 rounded w-100 h-100 d-flex flex-column">
      
      <div className="d-flex mb-3">
        <button className="btn btn-outline-success btn-sm me-2">Active QR Codes</button>
        <button className="btn btn-success btn-sm me-2" >QR Code Requests</button>
      </div>

      <ul className="list-group flex-grow-1">
        {qrItems.map((item) => (
          <li key={item.id} className="list-group-item d-flex align-items-start border-0">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?data=Q201946579&size=40x40"
              alt="qr"
              className="me-3"
            />
            <div>
              <small className="fw-bold">{item.title}</small><br />
              <span className="text-muted small">{item.address}</span><br />
              <small className="text-muted">Requested on {item.date}</small>
              <div className="mt-2">
                <button className="btn btn-light border text-success btn-sm">
                  <i className="bi bi-check-circle-fill me-1"></i> QR Request Accepted
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

     
      <button className="btn btn-success w-100 mt-3">Request more QR Codes</button>
    </div>
  );
}
