import React from "react";

import QRCard1 from "../Components/QRCard1";
import QRList2 from "../Components/QRList2";

export default function QRRequest() {
  return (
    <div className="d-flex flex-column mx-auto">
      <div className="d-flex flex-grow-1">
        <div className="flex-grow-1">
          <div className="container my-4">
            <div className="row g-4">
              <div className="col-md-6">
                <QRCard1 />
              </div>
              <div className="col-md-6">
                <QRList2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
