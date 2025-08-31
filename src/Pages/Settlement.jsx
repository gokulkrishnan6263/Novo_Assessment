import React, { useState } from "react";
import SettlementRow from "../Components/SettlementRow";
import SettleNowBox from "../Components/SettleNowBox";
import SettlementModal from "../Components/common/SettlementModal";


export default function Settlement() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container my-5">
      <div className="bg-white rounded border p-3">
        <h4>Manage QR / POS</h4>

        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 className="fw-semibold mb-1 pt-4">
              <i className="bi bi-bank me-2"></i> Today’s Total Collection
            </h5>
            <p className="text-success fw-semibold mb-0 pt-2">
              <i className="bi bi-check-circle-fill me-2"></i> Already Settled
            </p>
          </div>
          <div className="text-end pt-4">
            <div className="fs-4 fw-bold">₹1,023</div>
            <div className="text-muted">₹100</div>
          </div>
        </div>

        <hr />

       
        <p className="text-uppercase text-secondary small fw-semibold mb-3">
          Settlement Calculation
        </p>
        <SettlementRow label="Amount yet to be settled" value="IBRAHIM MOHAMMEDALI" />
        <SettlementRow label="Past pending amount" value="092141241127" />
        <SettlementRow label="Charges" value="07, Aug 2024" />

        <hr />

       
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-semibold mb-0">
            <i className="bi bi-bank me-2"></i> Today’s Total Collection
          </h6>
          <span className="fw-bold">₹1,023</span>
        </div>

        
        <SettleNowBox onSettleClick={() => setShowModal(true)} />
      </div>

      
      <SettlementModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
