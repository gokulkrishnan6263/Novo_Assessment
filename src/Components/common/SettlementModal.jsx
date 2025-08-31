
import React from "react";
import Settlement from "../../Pages/Settlement";

export default function SettlementModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content rounded-3">
          <div className="modal-header">
            <h5 className="modal-title">Settlement</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
           
            <Settlement />
          </div>
        </div>
      </div>
    </div>
  );
}
