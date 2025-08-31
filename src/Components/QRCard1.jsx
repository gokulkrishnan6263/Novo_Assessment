import React from "react";
import { Download, Share } from "react-bootstrap-icons";
import posImg from "../assets/img/img4.png";

export default function QRCard1() {
  return (
    <div>
        <h5 className="mb-4">Manage QR/POS</h5>
    <div className="bg-white shadow-sm p-4 text-center rounded">
     
      
      <div className="d-flex justify-content-center mb-3">
        <img
          src={posImg}
          alt="pos"
          className="img-fluid"
          style={{ maxHeight: "120px" }}
        />
      </div>

     
      <div className="d-flex justify-content-center mb-3">
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?data=9876543210@qpay&size=200x200"
          alt="qr"
          className="img-fluid"
          style={{ maxHeight: "200px" }}
        />
      </div>

      
      <h6 className="fw-bold">
        UPI ID: <span className="text-dark">9876543210@qpay</span>
      </h6>
      <p className="text-muted mb-4">Ibrahim Mohammedali</p>

    
      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-light border">
          <Download className="me-1" /> Download
        </button>
        <button className="btn btn-light border">
          <Share className="me-1" /> Share
        </button>
      </div>
    </div>
    </div>
  );
}

