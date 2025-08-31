import React from "react";
import posImg from "../assets/img/img2.png"; // ✅ import image
import posImg1 from "../assets/img/img3.png";
export default function Banner() {
  return (
    <div className="container my-4 ">
      <div className="bg-success text-white p-4 rounded-3 d-flex flex-column flex-md-row align-items-center justify-content-between banner-box p-5">
        <div>
                  <img
          src={posImg1}
          alt="pos"
          className="img-fluid mt-3 mt-md-0"
          style={{ maxHeight: "120px" }}
        />
          <p className="mb-2">One device for accepting all modes of payments</p>
          <button className="btn btn-light btn-sm">Download App Now!</button>
        </div>

        
        <img
          src={posImg}
          alt="pos"
          className="img-fluid mt-3 mt-md-0"
          style={{ maxHeight: "120px" }}
        />
      </div>
    </div>
  );
}
