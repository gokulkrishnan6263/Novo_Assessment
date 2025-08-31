import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SidebarQR from "../Components/SidebarQR";

export default function LayoutQR() {
    return (
        <div className="d-flex flex-column vh-100 mb-5  ">
            <div className="" style={{ position: "sticky", top: 0, zIndex: 1020, overflow: 'hidden' }}>
                <Navbar />
            </div>

            <div className="d-flex flex-grow-1 ">
                <div
                    className={`bg-success text-white p-2 d-none d-md-block`}
                    style={{
                       
                        height: "100%",
                        overflowX: "hidden",
                        overflowY: 'hidden',
                  
                    borderRadius:"15px",
                    marginLeft:"20px",
                    }}
                >
                    <SidebarQR />
                </div>

                <div
                    className="flex-grow-1 p-3"
                    style={{
                        overflowY: "auto",
                        height: "calc(100vh - 60px)", 
                    }}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
