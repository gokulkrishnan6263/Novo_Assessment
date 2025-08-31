import React from "react";

export default function SettleNowBox({ onSettleClick }) {
  return (
    <div
      className="d-flex flex-wrap justify-content-between align-items-center p-3 rounded"
      style={{ backgroundColor: "#EAF5EE" }}
    >
      <div>
        <p className="mb-1 fw-semibold">
          Tap ‘Settle Now’ to instantly get settlements in your <br /> bank
          account.
        </p>

        <p className="mb-0 fw-semibold small mt-3" style={{ color: "#61CE70" }}>
          Settle Now is Chargeable
        </p>
      </div>
      <button
        className="btn btn-success px-5 mt-4 mt-md-0"
        onClick={onSettleClick}
      >
        Settle Now
      </button>
    </div>
  );
}
