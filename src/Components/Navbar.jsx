import posImg from "../assets/img/img4.png";
import { List } from "react-bootstrap-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // Close menu after navigation
  };

  return (
    <>
      <nav
        className="navbar navbar-light shadow-lg px-4 w-100 d-flex align-items-center"
        style={{ backgroundColor: "#f8f9fa" }}
      >
      
        <div className="d-flex d-md-none align-items-center me-2">
          <List size={24} onClick={toggleMenu} style={{ cursor: "pointer" }} />
        </div>

        <img
          src={posImg}
          alt="pos"
          className="img-fluid"
          style={{ maxHeight: "60px" }}
        />

        <div className="ms-auto d-flex align-items-center">
          <span className="me-2 text-muted d-none d-md-inline">
            Hello, Thomas Shelby
          </span>
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="rounded-circle"
          />
        </div>
      </nav>

     
      {menuOpen && (
        <div
          className="position-fixed top-0 start-0 w-75 h-100 bg-white shadow-lg p-3 d-md-none"
          style={{ zIndex: 1050 }}
        >
          <button
            className="btn btn-sm btn-secondary mb-3"
            onClick={toggleMenu}
          >
            Close
          </button>

       
          <ul className="list-unstyled">
            <li
              className="mb-2"
              style={{ cursor: "pointer" }}
              onClick={() => handleNavigate("/")}
            >
              Home
            </li>
            <li
              className="mb-2"
              style={{ cursor: "pointer" }}
              onClick={() => handleNavigate("/manage")}
            >
              QR
            </li>
            <li
              className="mb-2"
              style={{ cursor: "pointer" }}
              onClick={() => handleNavigate("/history")}
            >
              History
            </li>
            <li
              className="mb-2"
              style={{ cursor: "pointer" }}
              onClick={() => handleNavigate("/profile")}
            >
              Profile
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
  