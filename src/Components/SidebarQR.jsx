import React from "react";
import { NavLink } from "react-router-dom";
import { HouseDoor, QrCode, Clock, Person, CaretDownFill } from "react-bootstrap-icons";
import posImg from "../assets/img/img5.png";

export default function SidebarQR() {
  return (
    <div
      className="d-none d-md-flex flex-column justify-content-between bg-success text-white sidebar "
      style={{ width: "220px", borderRadius: "10px", height: "90vh", }}
    >
      <div>
       
        <NavLink
          to="/"
          className={({ isActive }) =>
            `d-flex align-items-center my-3 p-2 me-4 rounded no-underline ${
              isActive ? "bg-white fw-bold text-success" : "text-white"
            }`
          }
          style={{ textDecoration: "none" }} // <-- force remove underline
        >
          <HouseDoor className="me-2" /> Home
        </NavLink>

        
        <NavLink
          to="/manage"
          className={({ isActive }) =>
            `d-flex align-items-center p-2 mb-3 rounded me-4 no-underline ${
              isActive ? "bg-white text-success fw-bold" : "text-white"
            }`
          }
          style={{ textDecoration: "none" }}
        >
          <QrCode className="me-2" /> QR
        </NavLink>

      
        <NavLink
          to="/history"
          className={({ isActive }) =>
            `d-flex align-items-center justify-content-between mb-3 rounded p-2 me-4 no-underline ${
              isActive ? "bg-white text-success fw-bold" : "text-white"
            }`
          }
          style={{ textDecoration: "none" }}
        >
          <span>
            <Clock className="me-2" /> History
          </span>
          
        </NavLink>

       
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `d-flex align-items-center mb-3 me-4 rounded p-2 no-underline ${
              isActive ? "bg-white text-success fw-bold" : "text-white"
            }`
          }
          style={{ textDecoration: "none" }}
        >
          <Person className="me-2" /> Profile
        </NavLink>
      </div>

      
      <div className="bg-white rounded p-2 text-center me-4">
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
