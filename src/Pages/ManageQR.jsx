import React from "react";

import Navbar from "../Components/Navbar";
import QRList1 from "../Components/QRList1";
import QRCard1 from "../Components/QRCard1";
import SidebarQR from "../Components/SidebarQR";
export default function ManageQR() {
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
                <QRList1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
